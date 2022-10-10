import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Context from '../context/Context';
import { getPeople } from '../service/getAPI';

Modal.setAppElement('#root');

function Details() {
  const {
    modalIsOpen, setModalIsOpen, selectedFilm,
  } = useContext(Context);

  const [allPeople, setAllPeople] = useState([]);

  useEffect(() => {
    const getAllPeople = async () => {
      const arrayPeople = selectedFilm.people.map(async (pessoa) => {
        if (pessoa !== 'https://ghibliapi.herokuapp.com/people/') {
          const result = await getPeople(pessoa);
          return result;
        }
        return arrayPeople;
      });
      const resolvePeople = await Promise.all(arrayPeople);
      setAllPeople(resolvePeople);
    };
    getAllPeople();
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      className="modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <section>
        {selectedFilm
          ? (
            <section>
              <img src={selectedFilm.movie_banner} alt="Banner do filme." />
              <h1>{selectedFilm.title}</h1>
              <p>{selectedFilm.description}</p>
              <p>
                {`Produtor: ${selectedFilm.producer}`}
              </p>
              {
                allPeople && allPeople.map((e) => (
                  <p key={e.name}>
                    {`nome: ${e.name}`}
                    {` age: ${e.age}`}
                  </p>
                ))
              }
            </section>
          )
          : false}
      </section>
    </Modal>
  );
}

export default Details;

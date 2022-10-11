import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Context from '../context/Context';
import { getPeople } from '../service/getAPI';
import '../styles/Details.css';

Modal.setAppElement('#root');

function Details() {
  const {
    modalIsOpen, setModalIsOpen, selectedFilm,
  } = useContext(Context);

  const [allPeople, setAllPeople] = useState([]);
  // const [allLocations, setAllLocations] = useState([]);

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

  // useEffect(() => {
  //   const getAllLocations = async () => {
  //     const arrayLocations = selectedFilm.locations.map(async (local) => {
  //       if (local !== 'https://ghibliapi.herokuapp.com/locations/') {
  //         const result = await getLocations(local);
  //         console.log(result);
  //         return result;
  //       }
  //     });
  //     // const resolveLocation = await Promise.all(arrayLocations);
  //     setAllLocations(arrayLocations);
  //   };
  //   getAllLocations();
  // }, []);

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
        <button type="button" onClick={closeModal} className="button-close">X</button>
        {selectedFilm
          ? (
            <section>
              <img src={selectedFilm.movie_banner} alt="Banner do filme." className="img-banner" />
              <h1>{selectedFilm.title}</h1>
              <p className="description">{selectedFilm.description}</p>
              {
                allPeople && allPeople.map((e) => (

                  <section className="perso-age" key={e.name}>
                    <p className="propriedade">
                      {`Personagem: ${e.name}`}
                    </p>
                    <p className="propriedade">
                      {`Idade: ${e.age}`}
                    </p>
                  </section>
                ))
              }
              {/* {
              allLocations && allLocations.map((local) => (
                <p key={local}>
                  {`nome: ${local.name}`}
                </p>
              ))
              } */}
            </section>
          )
          : false}
      </section>
    </Modal>
  );
}

export default Details;

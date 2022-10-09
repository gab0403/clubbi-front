import React, { useContext } from 'react';
import Modal from 'react-modal';
import Context from '../context/Context';

Modal.setAppElement('#root');

function Details() {
  const {
    modalIsOpen, setIsOpen, filmId,
  } = useContext(Context);

  // const [people, setPeople] = useState([]);

  const closeModal = () => {
    setIsOpen(false);
  };

  // const getPeoples = async (pessoa) => {
  //   if (filmId) {
  //     const results = await fetch(`${pessoa}`).then((response) => response.json());

  //     setPeople(results);
  //     console.log('teste film', results);
  //   }
  // };

  // const getPeople = () => {
  //   if (filmId) {
  //     filmId.people.forEach((pessoa) => getPeoples(pessoa));
  //   }
  // };
  // getPeople();

  return (
    <Modal
      className="modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <section>
        {filmId
          ? (
            <section>
              <img src={filmId.movie_banner} alt="Banner do filme." />
              <h1>{filmId.title}</h1>
              <p>{filmId.description}</p>
              <p>
                { `Produtor: ${filmId.producer}` }
              </p>
            </section>
          )
          : false}
      </section>
    </Modal>
  );
}

export default Details;

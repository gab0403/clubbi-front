import React, { useContext } from 'react';
import Modal from 'react-modal';
import Context from '../context/Context';
import '../styles/Details.css';

Modal.setAppElement('#root');

function Details() {
  const {
    modalIsOpen, setModalIsOpen, selectedFilm,
  } = useContext(Context);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      className="modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <section className="section-proprie">
        <button data-testid="button-close" type="button" onClick={closeModal} className="button-close">X</button>
        {selectedFilm
          ? (
            <section>
              <img src={selectedFilm.movie_banner} alt="Banner do filme." className="img-banner" />
              <h1>{selectedFilm.title}</h1>
              <p className="description">{selectedFilm.description}</p>
              {
                selectedFilm && selectedFilm.people.map((e) => (

                  <section className="perso-age" key={e.id}>
                    <li>
                      {`Personagem: ${e.name}`}
                    </li>
                    <li>
                      {`Idade: ${e.age}`}
                    </li>
                  </section>
                ))
              }
              {
              selectedFilm && selectedFilm.locations.map((local) => (
                <p className="location" key={local.id}>
                  {`Local: ${local.name}`}
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

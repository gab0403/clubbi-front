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
        <button type="button" onClick={closeModal} className="button-close">X</button>
        {selectedFilm
          ? (
            <section>
              <div className="section-proprie">
                <img src={selectedFilm.movie_banner} alt="Banner do filme." className="img-banner" />
                <h1>{selectedFilm.title}</h1>
                <p className="description">{selectedFilm.description}</p>
                {
                selectedFilm && selectedFilm.people.map((e) => (

                  <section className="perso-age" key={e.id}>
                    <p className="propriedade">
                      {`Personagem: ${e.name}`}
                    </p>
                    <p className="propriedade">
                      {`Idade: ${e.age}`}
                    </p>
                  </section>
                ))
              }
                {
              selectedFilm && selectedFilm.locations.map((local) => (
                <p key={local.id}>
                  {`Local: ${local.name}`}
                </p>
              ))
              }
              </div>
            </section>
          )
          : false}
      </section>
    </Modal>
  );
}

export default Details;

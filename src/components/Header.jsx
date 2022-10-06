import React from 'react';
// import Context from '../context/Context';
import logo from '../images/logo.png';
import '../styles/Header.css';

function Header() {
  //  const { getFilms, getActors, getLocations } = useContext(Context);

  return (
    <header className="header">
      <img data-testid="img-header" className="header-img" src={logo} alt="Logo do Estudio Ghibli" />
      {/* <section className="header-section">
        <button
          className="header-button"
          data-testid="button-films"
          type="button"
          onClick={getFilms}
        >
          Filmes
        </button>
        <button
          className="header-button"
          data-testid="button-actors"
          type="button"
          onClick={getActors}
        >
          Atores
        </button>
        <button
          className="header-button"
          data-testid="button-locations"
          type="button"
          onClick={getLocations}
        >
          Locais
        </button>
      </section> */}
    </header>
  );
}

export default Header;

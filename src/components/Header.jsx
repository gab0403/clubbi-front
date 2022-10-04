import React, { useContext } from 'react';
import Context from '../context/Context';
import capa from '../images/capa.jpeg';

function Header() {
  const { getFilms, getActors, getLocations } = useContext(Context);

  return (
    <header>
      <img src={capa} alt="ilustração de diversos personagens do Estudio Ghibli" />
      <button
        type="button"
        onClick={getFilms}
      >
        Filmes
      </button>
      <button
        type="button"
        onClick={getActors}
      >
        Atores
      </button>
      <button
        type="button"
        onClick={getLocations}
      >
        Locais
      </button>
    </header>
  );
}

export default Header;

import React, { useContext } from 'react';
import Context from '../context/Context';
import capa from '../images/capa.jpeg';

function Header() {
  const { getFilms, getActors, getLocations } = useContext(Context);

  return (
    <header>
      <img data-testid="img-header" src={capa} alt="ilustração de diversos personagens do Estudio Ghibli" />
      <button
        data-testid="button-films"
        type="button"
        onClick={getFilms}
      >
        Filmes
      </button>
      <button
        data-testid="button-actors"
        type="button"
        onClick={getActors}
      >
        Atores
      </button>
      <button
        data-testid="button-locations"
        type="button"
        onClick={getLocations}
      >
        Locais
      </button>
    </header>
  );
}

export default Header;

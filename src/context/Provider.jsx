import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [allFilms, setAllFilms] = useState([]);
  const [filterFilms, setfilterFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState();

  const contextValue = React.useMemo(() => ({
    allFilms,
    setAllFilms,
    filterFilms,
    setfilterFilms,
    selectedFilm,
    setSelectedFilm,
    modalIsOpen,
    setModalIsOpen,
  }), [
    modalIsOpen,
    allFilms,
    filterFilms,
    selectedFilm,
  ]);

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;

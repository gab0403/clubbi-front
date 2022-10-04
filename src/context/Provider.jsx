import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Context from './Context';

function Provider({ children }) {
  const values = {
    name: '',
  };

  const [filterByName, setFilterByName] = useState(values);
  const navigate = useNavigate();

  const getFilms = async () => {
    navigate('/films');
  };

  const getActors = async () => {
    navigate('/actors');
  };

  // const getLocations = async () => {
  //   const { results } = await fetch('https://ghibliapi.herokuapp.com/locations').then((response) => response.json());
  //   setApi(results);
  // };

  const contextValue = React.useMemo(() => ({
    getFilms,
    getActors,
    // getLocations,
    filterByName,
    setFilterByName,
  }), [
    filterByName,
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

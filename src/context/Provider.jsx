import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import Context from './Context';

function Provider({ children }) {
  const [filterByName, setFilterByName] = useState();

  // const navigate = useNavigate();

  // const getFilms = async () => {
  //   navigate('/films');
  // };

  // const getActors = async () => {
  //   navigate('/actors');
  // };

  // const getLocations = async () => {
  //   navigate('/locations');
  // };

  const contextValue = React.useMemo(() => ({
    // getFilms,
    // getActors,
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

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [filterByName, setFilterByName] = useState();
  const [people, setPeople] = useState([]);
  const [filterPeoples, setFilterPeoples] = useState([]);
  const [location, setLocation] = useState([]);
  const [filterLocations, setFilterLocations] = useState([]);
  const [films, setFilms] = useState([]);
  const [filterFilms, setfilterFilms] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filmId, setFilmId] = useState();

  const filmById = async (id) => {
    const results = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`).then((response) => response.json());
    return results;
  };

  useEffect(() => {
    const getAllFilms = async () => {
      const results = await fetch('https://ghibliapi.herokuapp.com/films').then((response) => response.json());
      results.map((film) => filmById(film.id));
      setFilms(results);
      setfilterFilms(results);
    };
    getAllFilms();
  }, []);

  // useEffect(() => {
  //   const filterApiName = films.filter(
  //     (film) => film.title.toLowerCase()
  //       .includes(filterByName.toString().toLowerCase()),
  //   );
  //   setfilterFilms(filterApiName === [] ? films : filterApiName);
  // }, [filterByName]);

  // useEffect(() => {
  //   const getPeople = async () => {
  //     const results = await fetch('https://ghibliapi.herokuapp.com/people').then((response) => response.json());
  //     setPeople(results);
  //     setFilterPeoples(results);
  //   };
  //   getPeople();
  // }, []);

  useEffect(() => {
    const filterApiName = people.filter(
      (peop) => peop.name.toLowerCase()
        .includes(filterByName.toString().toLowerCase()),
    );
    setFilterPeoples(filterApiName === [] ? people : filterApiName);
  }, [filterByName]);

  useEffect(() => {
    const getLocal = async () => {
      const results = await fetch('https://ghibliapi.herokuapp.com/locations').then((response) => response.json());
      setLocation(results);
      setFilterLocations(results);
    };
    getLocal();
  }, []);

  useEffect(() => {
    const filterApiName = location.filter(
      (local) => local.name.toLowerCase()
        .includes(filterByName.toString().toLowerCase()),
    );
    setFilterLocations(filterApiName === [] ? location : filterApiName);
  }, [filterByName]);

  const contextValue = React.useMemo(() => ({
    filterByName,
    setFilterByName,
    filterPeoples,
    setFilterPeoples,
    people,
    setPeople,
    location,
    setLocation,
    filterLocations,
    setFilterLocations,
    films,
    setFilms,
    filterFilms,
    setfilterFilms,
    modalIsOpen,
    setIsOpen,
    filmId,
    setFilmId,
  }), [
    filterByName,
    filterPeoples,
    people,
    location,
    filterLocations,
    films,
    filterFilms,
    modalIsOpen,
    filmId,
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

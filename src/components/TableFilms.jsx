import React, { useEffect, useState } from 'react';
import Header from './Header';

function TableFilms() {
  const [filterByName, setFilterByName] = useState();
  const [films, setFilms] = useState([]);
  const [filmsFiltrados, setFilmsFiltrados] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const results = await fetch('https://ghibliapi.herokuapp.com/films').then((response) => response.json());
      setFilms(results);
      setFilmsFiltrados(results);
    };
    getFilms();
  }, []);

  useEffect(() => {
    const filterApiName = films.filter(
      (film) => film.title.toLowerCase()
        .includes(filterByName.toString().toLowerCase()),
    );
    setFilmsFiltrados(filterApiName === [] ? films : filterApiName);
  }, [filterByName]);

  return (
    <section>
      <Header />
      <input
        type="text"
        value={filterByName}
        onChange={(e) => setFilterByName(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Original Title</th>
            <th>Original Title Romanised</th>
            <th>Description</th>
            <th>Diretor</th>
            <th>Producer</th>
            <th>Release Date</th>
            <th>Running Time</th>
            <th>RT Score</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filmsFiltrados.map((e) => (
            <tr key={e.title}>
              <td>{ e.title }</td>
              <td>{ e.original_title }</td>
              <td>{ e.original_title_romanised }</td>
              <td>{ e.description }</td>
              <td>{ e.director }</td>
              <td>{ e.producer }</td>
              <td>{ e.release_date }</td>
              <td>{ e.running_time }</td>
              <td>{ e.rt_score }</td>
              <td>{ e.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TableFilms;

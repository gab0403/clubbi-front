import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import Details from './Details';
import '../styles/CardFilm.css';
import {
  getAllFilms, getAllPeoples, getAllLocations, getCompletedMovies,
} from '../service/getAPI';
import { saveLocalStorage } from '../helpers/localStorage';

function Films() {
  const {
    allFilms,
    setAllFilms, filterFilms, setfilterFilms, setSelectedFilm, modalIsOpen, setModalIsOpen,
  } = useContext(Context);

  const [filterByName, setFilterByName] = useState('');

  const getCompletedFilms = async () => {
    const completedMovies = await getCompletedMovies();
    saveLocalStorage('filmesCompletos', completedMovies);
    setAllFilms(completedMovies ?? completedMovies);
    setfilterFilms(completedMovies ?? completedMovies);
  };

  const getAll = async () => {
    const resultFilms = await getAllFilms();
    const resultPeoples = await getAllPeoples();
    const resultLocations = await getAllLocations();
    saveLocalStorage('filmes', resultFilms ?? resultFilms);
    saveLocalStorage('pessoas', resultPeoples ?? resultPeoples);
    saveLocalStorage('locais', resultLocations ?? resultLocations);
    getCompletedFilms();
  };

  const setFilm = (film) => {
    setSelectedFilm(film);
    setModalIsOpen(true);
  };

  useEffect(() => {
    const filterApiName = allFilms.filter((film) => film.title.toLowerCase()
      .includes(filterByName.toString().toLowerCase()));
    setfilterFilms(filterApiName === [] ? allFilms : filterApiName);
  }, [filterByName]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <section>
      { modalIsOpen
        ? <Details /> : false}
      <section className="section-card">
        <input
          placeholder="Pesquise pelos seus filmes favoritos!"
          className="search"
          data-testid="input-search"
          type="text"
          value={filterByName}
          onChange={(e) => setFilterByName(e.target.value)}
        />
        <section data-testid="result-table" className="card">
          {filterFilms.map((e) => (
            <section key={e.title} className="card-id">
              <img className="img-card" src={e.image} alt="" />
              <div className="div-texts">
                <h1>{e.title}</h1>
                <p>
                  {`${e.release_date} `}
                </p>
                <p>
                  {`Diretor: ${e.director} `}
                </p>
                <p>
                  {`Tempo: ${e.running_time}min`}
                </p>
                <p>
                  {`Score:  ${e.rt_score}%`}
                </p>
                <section className="section-button-details">
                  <button className="button-details" type="button" onClick={() => setFilm(e)}>Detalhes</button>
                </section>
              </div>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}

export default Films;

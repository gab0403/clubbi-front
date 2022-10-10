import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import Details from './Details';
import '../styles/CardFilm.css';
import { getAllFilms } from '../service/getAPI';

function Films() {
  const {
    allFilms,
    setAllFilms, filterFilms, setfilterFilms, setSelectedFilm, modalIsOpen, setModalIsOpen,
  } = useContext(Context);

  const [filterByName, setFilterByName] = useState('');

  const getAll = async () => {
    const result = await getAllFilms();
    console.log('teste', result);
    setAllFilms(result);
    setfilterFilms(result);
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
        <p>Filmes</p>
        <input
          placeholder="Pesquise pelo seus filmes favoritos"
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
                  {`Diretor: ${e.director} `}
                </p>
                <p>
                  {`Data: ${e.release_date} `}
                </p>
                <p>
                  {`Tempo: ${e.running_time}min`}
                </p>
                <p>
                  {`Score:  ${e.rt_score}`}
                </p>
                <button type="button" onClick={() => setFilm(e)}>Detalhes</button>
              </div>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}

export default Films;

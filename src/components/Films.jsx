import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import '../styles/CardFilm.css';

function Films() {
  const { filterByName, setFilterByName } = useContext(Context);
  const [films, setFilms] = useState([]);
  const [filterFilms, setfilterFilms] = useState([]);

  async function filmById(id) {
    const results = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`).then((response) => response.json());
    return results;
  }

  useEffect(() => {
    const getAllFilms = async () => {
      const results = await fetch('https://ghibliapi.herokuapp.com/films').then((response) => response.json());
      results.map((film) => filmById(film.id));
      setFilms(results);
      setfilterFilms(results);
    };
    getAllFilms();
  }, []);

  useEffect(() => {
    const filterApiName = films.filter(
      (film) => film.title.toLowerCase()
        .includes(filterByName.toString().toLowerCase()),
    );
    setfilterFilms(filterApiName === [] ? films : filterApiName);
  }, [filterByName]);

  return (
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
              <h1>{ e.title }</h1>
              <p>
                Diretor:
                {' '}
                { e.director }
              </p>
              <p>
                Produtor:
                {' '}
                { e.producer }
              </p>
              <p>
                Data:
                {' '}
                { e.release_date }
              </p>
              <p>
                Tempo:
                {' '}
                { e.running_time }
                min
              </p>
              <p>
                Score:
                {' '}
                { e.rt_score }
              </p>

            </div>
          </section>
        ))}
      </section>
    </section>
  );
}

export default Films;

import React, { useContext } from 'react';
import Context from '../context/Context';
import Details from './Details';
import '../styles/CardFilm.css';

function Films() {
  const {
    filterByName, setFilterByName, filterFilms, setIsOpen,
    setFilmId,
  } = useContext(Context);

  // const [people, setPeople] = useState([]);

  const getIdFilm = async (id) => {
    const results = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`).then((response) => response.json());
    setFilmId(results);
    setIsOpen(true);
  };

  // const getPeoples = async (pessoa) => {
  //   if (filmId) {
  //     const results = await fetch(`${pessoa}`).then((response) => response.json());
  //     console.log(results.name);
  //     setPeople(results.name);
  //     console.log('teste film', results);
  //   }
  // };

  // const getPeople = () => {
  //   if (filmId) {
  //     filmId.people.forEach((pessoa) => getPeoples(pessoa));
  //   }
  // };
  // getPeople();

  return (
    <section>
      <Details />
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
                  {`Diretor: ${e.director} `}
                </p>
                <p>
                  {`Data: ${e.release_date} `}
                </p>
                <p>
                  {`Tempo: ${e.running_time}min` }
                </p>
                <p>
                  {`Score:  ${e.rt_score}` }
                </p>
                <button type="button" onClick={() => getIdFilm(e.id)}>Detalhes</button>
              </div>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}

export default Films;

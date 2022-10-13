import axios from 'axios';
import { Builder } from 'builder-pattern';
import { getSavedInLocalStorage } from '../helpers/localStorage';

const ghibliAPI = axios.create({});

const builderFilms = (films) => {
  const result = films.map((film) => Builder()
    .id(film.id)
    .title(film.title)
    .image(film.image)
    .movie_banner(film.movie_banner)
    .description(film.description)
    .producer(film.producer)
    .director(film.director)
    .release_date(film.release_date)
    .running_time(film.running_time)
    .rt_score(film.rt_score)
    .people(film.people)
    .locations(film.locations)
    .build());
  if (result) {
    return result;
  }
  return false;
};

const getAllFilms = async () => {
  const response = ghibliAPI.get('https://ghibliapi.herokuapp.com/films')
    .then(async (res) => builderFilms(res.data))
    .catch(() => false);
  return response;
};

const builderPeople = (filmId, peoples) => Builder()
  .filmId(filmId)
  .name(peoples.name)
  .age(peoples.age)
  .build();

const getPeople = async (filmId, url) => {
  const response = ghibliAPI.get(url)
    .then((res) => {
      const result = builderPeople(filmId, res.data);
      return result;
    })
    .catch(() => false);
  return response;
};

const getFilmId = (films) => {
  const ids = films && films.map((film) => film.substring(38, film.length));
  return ids[0];
};

const builderAllPeoples = (peoples) => {
  const result = peoples.map((people) => Builder()
    .id(people.id)
    .name(people.name)
    .filmId(getFilmId(people.films))
    .age(people.age)
    .build());
  if (result) {
    return result;
  }
  return false;
};

const getAllPeoples = async () => {
  const response = ghibliAPI.get('https://ghibliapi.herokuapp.com/people')
    .then(async (res) => builderAllPeoples(res.data))
    .catch(() => false);
  return response;
};

const builderAllLocations = (locations) => {
  const result = locations.map((location) => Builder()
    .id(location.id)
    .name(location.name)
    .filmId(getFilmId(location.films))
    .build());
  if (result) {
    return result;
  }
  return false;
};

const getAllLocations = async () => {
  const response = ghibliAPI.get('https://ghibliapi.herokuapp.com/locations')
    .then(async (res) => builderAllLocations(res.data))
    .catch(() => false);
  return response;
};

const builderCompleteMovies = (films, peop, locations) => {
  const result = films && films.map((film) => Builder()
    .id(film.id)
    .title(film.title)
    .image(film.image)
    .movie_banner(film.movie_banner)
    .description(film.description)
    .producer(film.producer)
    .director(film.director)
    .release_date(film.release_date)
    .running_time(film.running_time)
    .rt_score(film.rt_score)
    .people(peop.filter((peo) => peo.filmId === film.id))
    .locations(locations.filter((local) => local.filmId === film.id))
    .build());
  if (result) {
    return result;
  }
  return false;
};

const getCompletedMovies = () => {
  const resultFilms = JSON.parse(getSavedInLocalStorage('filmes'));
  const resultPeoples = JSON.parse(getSavedInLocalStorage('pessoas'));
  const resultLocations = JSON.parse(getSavedInLocalStorage('locais'));
  if (resultFilms && resultPeoples && resultLocations) {
    const filmesCompletos = builderCompleteMovies(resultFilms, resultPeoples, resultLocations);
    return filmesCompletos;
  }
  return false;
};

export {
  getAllFilms,
  getPeople,
  getAllPeoples,
  getAllLocations,
  getCompletedMovies,
};

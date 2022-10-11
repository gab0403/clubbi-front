import axios from 'axios';
import { Builder } from 'builder-pattern';

const ghibliAPI = axios.create({});

const builderFilms = (filmes) => {
  const result = filmes.map((film) => Builder()
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
  return result;
};

const getAllFilms = async () => {
  const response = ghibliAPI.get('https://ghibliapi.herokuapp.com/films')
    .then(async (res) => builderFilms(res.data))
    .catch(() => false);
  return response;
};

const builderPeople = (peoples) => Builder()
  .name(peoples.name)
  .age(peoples.age)
  .build();

const getPeople = async (url) => {
  const response = ghibliAPI.get(url)
    .then((res) => {
      const result = builderPeople(res.data);
      return result;
    })
    .catch(() => false);
  return response;
};

// const builderLocations = (locations) => Builder()
//   .name(locations.name)
//   .build();

// const getLocations = async (url) => {
//   const response = ghibliAPI.get(url)
//     .then((res) => {
//       const result = builderLocations(res.data);
//       console.log(result);
//       return result;
//     })
//     .catch(() => false);
//   return response;
// };

export {
  getAllFilms,
  getPeople,
  // getLocations,
};

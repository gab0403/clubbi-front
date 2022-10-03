import { useContext, useEffect } from 'react';
import Context from '../context/Context';

function FetchFilms() {
  const { setApi } = useContext(Context);
  useEffect(() => {
    const getFilms = async () => {
      const { results } = await fetch('https://ghibliapi.herokuapp.com/films').then((response) => response.json());
      setApi(results);
    };
    const getActors = async () => {
      const { results } = await fetch('https://ghibliapi.herokuapp.com/people').then((response) => response.json());
      setApi(results);
    };
    const getLocations = async () => {
      const { results } = await fetch('https://ghibliapi.herokuapp.com/locations').then((response) => response.json());
      setApi(results);
    };
    getFilms();
    getActors();
    getLocations();
  }, []);
}
export default FetchFilms;

import React, { useEffect, useState, useContext } from 'react';
import Context from '../context/Context';
import Header from './Header';

function TableLocations() {
  const { filterByName, setFilterByName } = useContext(Context);
  const [location, setLocation] = useState([]);
  const [filterLocations, setFilterLocations] = useState([]);

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

  return (
    <section>
      <Header />
      <input
        data-testid="input-search"
        type="text"
        value={filterByName}
        onChange={(e) => setFilterByName(e.target.value)}
      />
      <table data-testid="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Terrain</th>
            <th>Surfave Water</th>
            <th>Residents</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody data-testid="result-table">
          {filterLocations.map((e) => (
            <tr key={e.name}>
              <td>{ e.name }</td>
              <td>{ e.climate }</td>
              <td>{ e.terrain }</td>
              <td>{ e.surface_water }</td>
              <td>{ e.residents }</td>
              <td>{ e.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TableLocations;

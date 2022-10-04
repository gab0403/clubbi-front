import React, { useEffect, useState } from 'react';
import Header from './Header';

function TableLocations() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const getLocal = async () => {
      const results = await fetch('https://ghibliapi.herokuapp.com/locations').then((response) => response.json());
      setLocation(results);
    };
    getLocal();
  }, []);

  return (
    <section>
      <Header />
      <table>
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
        <tbody>
          {location.map((e) => (
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

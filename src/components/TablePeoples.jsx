import React, { useEffect, useState } from 'react';
import Header from './Header';

function TablePeople() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      const results = await fetch('https://ghibliapi.herokuapp.com/people').then((response) => response.json());
      setPeople(results);
    };
    getPeople();
  }, []);

  return (
    <section>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Eye Color</th>
            <th>Hair Color</th>
            <th>Species</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {people.map((e) => (
            <tr key={e.name}>
              <td>{ e.name }</td>
              <td>{ e.gender }</td>
              <td>{ e.age }</td>
              <td>{ e.eye_color }</td>
              <td>{ e.hair_color }</td>
              <td>{ e.species }</td>
              <td>{ e.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TablePeople;
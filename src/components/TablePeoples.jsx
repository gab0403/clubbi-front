import React, { useEffect, useState, useContext } from 'react';
import Context from '../context/Context';
import Header from './Header';

function TablePeople() {
  const { filterByName, setFilterByName } = useContext(Context);
  const [people, setPeople] = useState([]);
  const [filterPeoples, setFilterPeoples] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      const results = await fetch('https://ghibliapi.herokuapp.com/people').then((response) => response.json());
      setPeople(results);
      setFilterPeoples(results);
    };
    getPeople();
  }, []);

  useEffect(() => {
    const filterApiName = people.filter(
      (peop) => peop.name.toLowerCase()
        .includes(filterByName.toString().toLowerCase()),
    );
    setFilterPeoples(filterApiName === [] ? people : filterApiName);
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
            <th>Gender</th>
            <th>Age</th>
            <th>Eye Color</th>
            <th>Hair Color</th>
            <th>Species</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filterPeoples.map((e) => (
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

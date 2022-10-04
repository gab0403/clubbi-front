import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Header from '../components/Header';
import TableFilms from '../components/TableFilms';
import TableLocations from '../components/TableLocations';
import TablePeople from '../components/TablePeoples';

function Routes() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/films" element={<TableFilms />} />
          <Route exact path="/actors" element={<TablePeople />} />
          <Route exact path="/locations" element={<TableLocations />} />
        </Switch>
      </main>
    </div>
  );
}

export default Routes;

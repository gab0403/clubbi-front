import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Header from '../components/Header';
import TableFilms from '../components/TableFilms';

function Routes() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/films" element={<TableFilms />} />
        </Switch>
      </main>
    </div>
  );
}

export default Routes;

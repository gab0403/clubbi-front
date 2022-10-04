import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

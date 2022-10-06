import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Provider from './context/Provider';
import Routes from './routes/Routes';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

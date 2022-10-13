import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Films from './components/Films';
import Provider from './context/Provider';
import './styles/index.css';

function App() {
  return (
    <Provider>
      <Header />
      <Films />
      <Footer />
    </Provider>
  );
}

export default App;

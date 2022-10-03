import React from 'react';
import Provider from './context/Provider';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
    </Provider>
  );
}

export default App;

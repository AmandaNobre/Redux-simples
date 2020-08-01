import React from 'react';
import logo from './logo.svg';
import './App.css';

import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';


function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Soma />
        <Sorteio />
        <Media />
      </div>
    </div>
  );
}

export default App;

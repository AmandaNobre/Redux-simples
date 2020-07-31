import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Card title="Card 1" blue>Teste</Card>
        <Card title="Card 2" red>Teste</Card>
      </div>
      <div className="linha">
        <Card title="Card 3" green>Teste</Card>
        <Card title="Card 4" purple>Teste</Card>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from "react";
import Table from "./Component/Table"
import Bouton from "./Component/Button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table/>
          <Bouton text="Appuie"/>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import React from 'react';
import Etapa3 from './components/Etapa3';



export default class App extends React.Component
 {
  state = {
    etapa: 1,
    etapa: 2,
  };


  // renderizaEtapa = () => {
  //   switch (this.state.etapa) {
  //     case "1":
  //       return  <Etapa2/>
  //     case "2":
  //       return <Etapa3/>
  //   }
 

  renderizaEtapa = () => {
    if (this.state.etapa) {
      return <button>Próxima etapa</button>
    } else {
      return 'Não foi'
    }
  } 
 
  render()
 {
  return (
    <div className="App">
    <div>
      <Etapa1 />
      {this.renderizaEtapa()} 
    </div>

    </div>
  );
  }

  }
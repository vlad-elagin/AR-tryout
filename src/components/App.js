import React, { Component } from 'react';
import Header from './Header';
import Scene from './Scene';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Scene />
      </div>
    );
  }
}

export default App;

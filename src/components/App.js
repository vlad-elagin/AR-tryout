import React, { Component } from 'react';
import Header from './Header';
import Scene from './Scene';
import '../styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiroFound: false,
      kanjiFound: false,
    }
  }

  onMarkerStateChange = (type, isFound = false) => {
    this.setState({ [`${type}Found`]: isFound });
  }

  render() {
    return (
      <div className="App">
        <Header
          markers={{
            hiro: this.state.hiroFound,
            kanji: this.state.kanjiFound,
          }}
        />
        <Scene
          onMarkerStateChange={this.onMarkerStateChange}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './Header';
import Scene from './Scene';
import '../styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerFound: false,
    }
  }

  onMarkerStateChange = (isFound = false) => {
    console.log('marker state changes to ' + isFound);
    this.setState({ markerFound: isFound });
  }

  render() {
    return (
      <div className="App">
        <Header
          markerFound={this.state.markerFound}
        />
        <Scene
          onMarkerStateChange={this.onMarkerStateChange}
        />
      </div>
    );
  }
}

export default App;

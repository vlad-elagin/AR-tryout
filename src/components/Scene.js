import React from 'react';
import { Scene, Entity, Text, Camera } from 'react-aframe-ar';

class SceneWrapper extends React.Component {

  componentDidMount() {
    // init marker listeners
    const marker = document.querySelector('a-marker');
    console.dir(marker)
    marker.addEventListener('markerFound', () => this.props.onMarkerStateChange(true));
    marker.addEventListener('markerLost', () => this.props.onMarkerStateChange());
  }
  render() {
    return (
      <div
        className="scene"
        ref={(mount) => { this.mount = mount }}
      >
        <Scene>
          {/* Set up scene */}
          <Entity
            primitive="a-marker"
            preset="hiro"
          >
            {/* <Entity
              primitive="a-obj-model"
              src="/models/railroad-obj/Rails.obj"
              scale="0.003 0.003 0.003"
            /> */}

            <Text value="sup" color="red" align="center" position="0 0 0.3" />
          </Entity>

          <Camera position="0 0 0.5"/>
        </Scene>
      </div>
    );
  }
}

export default SceneWrapper;

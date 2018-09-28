import React from 'react';
import { Scene, Entity, Text } from 'react-aframe-ar';

class SceneWrapper extends React.Component {

  render() {
    return (
      <div
        className="scene"
        ref={(mount) => { this.mount = mount }}
      >
        <Scene>

          {/* Set up scene */}
          <Entity
            primitive="a-marker-camera"
            preset="hiro"
          >
            {/* <Text
              value="ti pidor"
              position="0 0 0"
              align="center"
              color="#7BC8A4"
              scale="2 2 1"
            /> */}
            <Entity
              primitive="a-obj-model"
              src="/models/railroad-obj/Rails.obj"
              scale="0.003 0.003 0.003"
            />
          </Entity>
        </Scene>
      </div>
    );
  }
}

export default SceneWrapper;

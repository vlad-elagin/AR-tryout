import React from 'react';
import { Scene, Entity, Camera, Sphere, Text } from 'react-aframe-ar';
/* <Entity
  primitive="a-obj-model"
  src="/models/railroad-obj/railroad.obj"
  mtl="/models/railroad-obj/railroad.mtl"
  scale="0.0002 0.0002 0.0002"
  rotation="-90 0 0"
  position="0 -0.5 0"
/> */

/* <Text value="hi i am hiro" color="red" align="center" position="0 0 0.0.1" rotation="-90px 0 0" /> */

class SceneWrapper extends React.Component {

  componentDidMount() {
    // init marker listeners
    const hiroMarker = document.querySelector('a-marker[preset="hiro"]');
    hiroMarker.addEventListener('markerFound', () => this.props.onMarkerStateChange('hiro', true));
    hiroMarker.addEventListener('markerLost', () => this.props.onMarkerStateChange('hiro'));
    this.hiroMarker = hiroMarker;

    const kanjiMarker = document.querySelector('a-marker[preset="kanji"]');
    kanjiMarker.addEventListener('markerFound', () => this.props.onMarkerStateChange('kanji', true));
    kanjiMarker.addEventListener('markerLost', () => this.props.onMarkerStateChange('kanji'));
    this.kanjiMarker = kanjiMarker;
  }

  render() {
    return (
      <div
        className="scene"
        ref={(mount) => { this.mount = mount }}
      >
        <Scene>
          {/* Set up Marker A */}
          <Entity
            primitive="a-marker"
            preset="hiro"
            size={0.18}
            line-position-updater="target: #line; textNode: #distance"
          >
            <Sphere radius={0.1} color="red"></Sphere>
          </Entity>

          {/* Set up Marker B */}
          <Entity
            primitive="a-marker"
            preset="kanji"
            size={0.18}
            line-position-updater="target: #line; textNode: #distance"
          >
            <Sphere radius={0.1} color="green"></Sphere>
          </Entity>

          {/* Components for measuring distance between markers */}
          <Entity
            id="line"
            visible={this.props.markers.hiro && this.props.markers.kanji}
          />
          <Text
            id="distance"
            color="red"
            align="center"
            rotation="-90 0 0"
            value="hello"
            scale="2 2 2"
            // visible={this.props.markers.hiro && this.props.markers.kanji}
            position="0 0 0.3"
          />

          <Camera position="0 0 0.5"/>
        </Scene>
      </div>
    );
  }
}

export default SceneWrapper;

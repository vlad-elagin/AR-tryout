import React from 'react';

const Header = (props) => (
  <header>
    <span className="heading">AR App</span>

    <div className="marker-indicators">
      <span className={`marker-indicator ${props.markers.hiro ? 'found' : ''}`}>
        Hiro:
      </span>

      <span className={`marker-indicator ${props.markers.kanji ? 'found' : ''}`}>
        Kanji:
      </span>
    </div>
  </header>
);

export default Header;

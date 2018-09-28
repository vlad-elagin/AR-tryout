import React from 'react';

const Header = (props) => (
  <header>
    <span className="heading">AR App</span>

    <span className={`marker-indicator ${props.markerFound ? 'found' : ''}`}>
      Marker:
    </span>
  </header>
);

export default Header;

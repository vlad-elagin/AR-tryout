import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { registerSceneComponents } from './helpers';

// register custom aframe components before mounting dom
registerSceneComponents();

ReactDOM.render(<App />, document.getElementById('root'));

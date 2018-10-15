import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './Containers/App';
// import Carousel from './Components/carousel' ;
// import Card from './Components/card' ;
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

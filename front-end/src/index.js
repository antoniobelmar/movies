import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieContainer from './MovieContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieContainer />, document.getElementById('root'));
registerServiceWorker();

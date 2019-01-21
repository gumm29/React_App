import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Head />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

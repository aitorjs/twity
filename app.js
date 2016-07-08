import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import routes from './src/routes';

ReactDOM.render(routes, document.getElementById('container'));
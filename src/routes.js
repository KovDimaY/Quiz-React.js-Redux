// Node modules import
import React from 'react';
import { Router, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Main from './components/main';
import About from './components/about';

// Routes definition
export default (
  <Router path='/' component={App}>
    <IndexRoute component={Main} />
    <Router path='/about' component={About} />
  </Router>
);

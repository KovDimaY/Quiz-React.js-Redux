// Node modules import
import React from 'react';
import { Router, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Main from './components/main';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/not-found';

// Routes definition
export default (
  <Router path='/' component={App}>
    <IndexRoute component={Main} />
    <Router path='/about' component={About} />
    <Router path='/contact' component={Contact} />
    <Router path='*' component={NotFound} />
  </Router>
);

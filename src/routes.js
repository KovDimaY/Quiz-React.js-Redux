// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Main from './components/main';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/not-found';

// Routes definition
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='*' component={NotFound} />
  </Route>
);

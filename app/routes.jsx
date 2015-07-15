import React from 'react';

import {
  Route,
  DefaultRoute
} from 'react-router';

import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import CompanyPage from './components/CompanyPage/CompanyPage';
import WorkPage from './components/WorkPage/WorkPage';
import ContactPage from './components/ContactPage/ContactPage';

export default (
  <Route handler={App}>
    <Route handler={CompanyPage} name="company" path="/company" />
    <Route handler={ContactPage} name="contact" path="/contact" />
    <Route handler={WorkPage} name="work" path="/work" />
    <DefaultRoute handler={HomePage} name="home" />
  </Route>
);

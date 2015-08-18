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
import TeamPage from './components/TeamPage/TeamPage';
import SteelDayPage from './components/SteelDayPage/SteelDayPage';

export default (
  <Route handler={App}>
    <Route handler={CompanyPage} name="company" path="/company" />
    <Route handler={ContactPage} name="contact" path="/contact" />
    <Route handler={TeamPage} name="team" path="/team" />
    <Route handler={WorkPage} name="work" path="/work">
      <Route handler={WorkPage} path="/work/:project" />
    </Route>
    <Route handler={SteelDayPage} name='steel-day' path='/steel-day' />
    <DefaultRoute handler={HomePage} name="home" />
  </Route>
);

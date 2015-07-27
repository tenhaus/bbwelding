'use strict';

import './_App.scss';

import Logo from './images/logo.png';
import LogoRetina from './images/logo@2x.png';

import React from 'react';
import { RouteHandler } from 'react-router';
import RetinaImage from 'react-retina-image';

import NavigationStore from '../../stores/NavigationStore';
import Navigation from '../Navigation/Navigation';

import AltActions from '../../actions/AltActions';

import isRetina from 'is-retina';

function getState() {
  return {
    pages: NavigationStore.getAll()
  };
}

class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = getState();
    AltActions.fetchData();
  }

  getSelectedPage() {
    let router = this.context.router;
    let pages = this.state.pages;
    for (let i = pages.length - 1; i >= 0; i--) {
      let page = pages[i];
      let isPageActive = Boolean(page.route && router.isActive(page.route));
      if (isPageActive) { return page; }
    }
    return -1;
  }

  render() {
    var pageStyle = {};
    var selectedPage = this.getSelectedPage();

    return (
      <div className='app' style={pageStyle}>
        <div className='header'>
          <RetinaImage src={Logo} />
          <Navigation pages={this.state.pages} />
        </div>

        <RouteHandler key={this.context.router.getCurrentPath()} />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default App;

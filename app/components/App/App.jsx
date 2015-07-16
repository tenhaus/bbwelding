'use strict';

import './_App.scss';

import Logo from './images/logo.png';
import LogoRetina from './images/logo@2x.png';

import React from 'react';
import { RouteHandler } from 'react-router';
import RetinaImage from 'react-retina-image';

import NavigationStore from '../../stores/NavigationStore';
import Navigation from '../Navigation/Navigation';

function getState() {
  return {
    pages: NavigationStore.getAll()
  };
}

class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = getState();
  }

  render() {
    return (
      <div className={'app'}>
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

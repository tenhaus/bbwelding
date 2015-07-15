'use strict';

import './_App.scss';

import React from 'react';
import { RouteHandler } from 'react-router';
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
        <Navigation pages={this.state.pages} />
        <RouteHandler key={this.context.router.getCurrentPath()} />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default App;

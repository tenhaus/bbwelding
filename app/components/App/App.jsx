'use strict';

import './_App.scss';

import React from 'react';
import RetinaImage from 'react-retina-image';
import isRetina from 'is-retina';
import {RouteHandler} from 'react-router';

import Logo from './images/logo.png';
import LogoRetina from './images/logo@2x.png';
import HandsImage from './images/hands.jpg';
import HandsImageRetina from './images/hands@2x.jpg';

import AltActions from '../../actions/AltActions';
import NavigationStore from '../../stores/NavigationStore';
import Navigation from '../Navigation/Navigation';

var PageBackground = isRetina()? 'url('+HandsImageRetina+')': 'url('+HandsImage+')';

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
    var pageStyle = null;
    var selectedPage = this.getSelectedPage();

    if(selectedPage.route !== 'home') {
      pageStyle = {
        backgroundImage: PageBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }

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

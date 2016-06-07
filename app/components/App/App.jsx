'use strict';

import './_App.scss';
import React from 'react';
import RetinaImage from 'react-retina-image';
import isRetina from 'is-retina';
import {RouteHandler} from 'react-router';

import Logo from './images/logo.png';
import LogoRetina from './images/logo@2x.png';
import shopImage from './images/our-shop.jpg';
import shopImageRetina from './images/our-shop@2x.jpg';
import teamImage from './images/our-team-photo.jpg';
import teamImageRetina from './images/our-team-photo@2x.jpg';
import companyImage from './images/our-company.jpg';
import companyImageRetina from './images/our-company@2x.jpg';
import workImage from './images/our-work.jpg';
import workImageRetina from './images/our-work@2x.jpg';
import contactImage from './images/welder.jpg';
import contactRetinaImage from './images/welder@2x.jpg';
import newsImage from './images/news.jpg';
import newsImageRetina from './images/news@2x.jpg';

import AltActions from '../../actions/AltActions';
import NavigationStore from '../../stores/NavigationStore';
import ResponsiveStore from '../../stores/ResponsiveStore';

import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function getState() {
  return {
    pages: NavigationStore.getAll(),
    responsiveStore: ResponsiveStore.getState()
  };
}

var ShopPageBackground = isRetina()? 'url('+ shopImageRetina +')': 'url('+ shopImage +')',
    TeamPageBackground = isRetina()? 'url('+ teamImageRetina +')': 'url('+ teamImage +')',
    CompanyPageBackground = isRetina()? 'url('+ companyImageRetina +')': 'url('+ companyImage +')',
    WorkPageBackground = isRetina()? 'url('+ workImageRetina +')': 'url('+ workImage +')',
    NewsPageBackground = isRetina()? 'url('+ newsImageRetina +')': 'url('+ newsImage +')';

class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = getState();
    AltActions.fetchData();

    this.onResponsiveStoreChanged = this.onResponsiveStoreChanged.bind(this);
  }

  onMobileNavButtonClick() {
    AltActions.toggleMobileNav();
  }

  componentDidMount() {
    ResponsiveStore.listen(this.onResponsiveStoreChanged);
  }

  onResponsiveStoreChanged() {
    this.setState({
      responsiveStore: ResponsiveStore.getState()
    });
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
    var headerStyle = null;
    var selectedPage = this.getSelectedPage();

    if(selectedPage.route === 'shop') {
      pageStyle = {
        backgroundImage: ShopPageBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      };

      headerStyle = {
        marginBottom: '3rem'
      }
    }

    if(selectedPage.route === 'team') {
      pageStyle = {
        backgroundImage: TeamPageBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      };

      headerStyle = {
        marginBottom: '3rem'
      }
    }

    if(selectedPage.route === 'work') {
      pageStyle = {
        backgroundImage: WorkPageBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      };

      headerStyle = {
        marginBottom: '3rem'
      }
    }

    if(selectedPage.route === 'company') {
      pageStyle = {
        backgroundImage: CompanyPageBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      };

      headerStyle = {
        marginBottom: '3rem'
      }
    }

    if(selectedPage.route === 'news') {
      pageStyle = {
        backgroundImage: NewsPageBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed'
      };

      headerStyle = {
        marginBottom: '3rem'
      }
    }



    let mobileNavigation = null;

    if(this.state.responsiveStore.showingMobileNav) {
      mobileNavigation = <MobileNavigation pages={this.state.pages} />;
    }

    return (
      <div className='app' style={pageStyle}>
        {mobileNavigation}
        <div className='header' style={headerStyle}>
          <div className='logo'>
            <RetinaImage className='logo' src={Logo} />
          </div>
          <Navigation pages={this.state.pages}
            onMobileNavButtonClick={this.onMobileNavButtonClick} />
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

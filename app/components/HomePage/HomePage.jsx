'use strict';

import './_HomePage.scss';

import React from 'react';
import RetinaImage from 'react-retina-image';

import WelderImage from './images/welder.jpg';
import WelderImageRetina from './images/welder@2x.jpg';

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page'>
        <RetinaImage className='welder-image' src={WelderImage} />
        <div className='copy'>
          <h1>The smartest working shop in the steel business</h1>
          <p>ONE &quot;B&quot; FOR BRAINS; ONE &quot;B&quot; FOR BRAWN.</p>
        </div>

      </div>
    );
  }
}

export default HomePage;

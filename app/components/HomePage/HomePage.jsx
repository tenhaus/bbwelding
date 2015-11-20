'use strict';

import './_HomePage.scss';

import React from 'react';
import RetinaImage from 'react-retina-image';

import AbstractImage from './images/abstract.png';
import AbstractImageRetina from './images/abstract@2x.png';

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page'>
        <RetinaImage className='welder-image' src={AbstractImage} />
        <div className='copy'>
          <h1>The smartest working shop in the steel business</h1>
          <p>ONE &quot;B&quot; FOR BRAINS; ONE &quot;B&quot; FOR BRAWN.</p>
        </div>

      </div>
    );
  }
}

export default HomePage;

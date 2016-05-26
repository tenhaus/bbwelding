'use strict';

import './_HomePage.scss';

import React from 'react';
import RetinaImage from 'react-retina-image';

import AbstractImage from './images/building1.jpg';
import AbstractImageRetina from './images/building1@2x.jpg';

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page'>
        <RetinaImage className='welder-image' src={AbstractImage} />
        <div className='copy'>
          <p>SAVE THE DATE:</p>
          <p> Friday, September 30, 2016 - 10:00 - 3:00</p>   
          <h1>AISC STEEL DAY</h1>
          <p>and B&amp;B Welding CELEBRATION - 45 Years of Excellence</p>
        </div>
      </div>
    );
  }
}

export default HomePage;

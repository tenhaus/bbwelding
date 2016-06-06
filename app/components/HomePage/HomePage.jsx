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
        <div className="full-section">
        <div className="news-section">
          <h2>Big News</h2>
          <p>We now have a major role in the emergency repairs of the Peninsula Bridge across Bear Creek. 
We partner with Covington Machine and SHA engineers make the fix and get the bridge open again.</p>
        </div>
      </div>
      </div>
    );
  }
}

export default HomePage;

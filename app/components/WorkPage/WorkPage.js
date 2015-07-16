'use strict'

import './_WorkPage.scss';

import React from 'react';
// import isRetina from 'is-retina';
//
// import HandsImage from './images/hands.jpg';
// import HandsImageRetina from './images/hands@2x.jpg';
//
// var style = {
//   base: {
//     backgroundImage: isRetina()? 'url('+HandsImageRetina+')': 'url('+HandsImage+')' ,
//     backgroundSize: 'cover'
//   }
// };

class WorkPage extends React.Component {
  render() {
    return (
      <div className="work-page">
        <div className='content-wrapper'>
          <div className='content'>
            Work Page
          </div>
        </div>

      </div>
    );
  }
}

export default WorkPage;

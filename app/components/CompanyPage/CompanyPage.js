import React from 'react';
import Radium from 'radium';
import Vimeo from 'react-vimeo';

import RetinaImage from 'react-retina-image';

import FlameImage from './images/flame.png';
import FlameImageRetina from './images/flame@2x.png';
import MachineImage from './images/machine.png';
import MachineImageRetina from './images/machine@2x.png';
import AiscImage from './images/aisc.png';
import AiscImageRetina from './images/aisc@2x.png';


import Style from './_CompanyPage.Style';

class CompanyPage extends React.Component {
  render() {
    return (
      <div id="company-page" style={Style.base}>
        <div style={Style.contentWrapper}>
          <div style={Style.content}>
            <h1 style={Style.title}>Our Company</h1>
              
            <div style={Style.topSection}>
              
              {/* Section */}
              <div style={Style.halfSection}>
                <div style={Style.halfDetail}>
                  <RetinaImage style={Style.image} src={FlameImage} />
                  <p style={Style.flameText}>We took the <em>hardest working</em> people in the steel business and made them <em>smarter</em>.</p>
                </div>
                <div style={Style.halfDetail}>
                  <RetinaImage style={Style.image} src={MachineImage} />
                  <p style={Style.machineText}>We gave them big, <em>powerful machines</em> and a 35,000 square foot shop.</p>
                </div>
              </div>

              {/* Section */}
              <div style={Style.halfSection}>
                <iframe src="https://player.vimeo.com/video/134711747" 
                  width="500" height="281" frameborder="0" 
                  webkitallowfullscreen mozallowfullscreen allowfullscreen />
              </div>
            </div>
            
            {/* Section */}
            <div style={Style.fullSection}>
              <RetinaImage style={Style.image} src={AiscImage} />
              <p>Add on AISC membership, a written quality control program, and the ability to electronically import designs straight from the engineers and what you get is one of the most <em>technology-driven steel fabrication</em> shops in the region.</p>
              <p>From small jobs to 500-ton jobs, B&B will complete them swifter, more affordably and with better quality.</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Radium(CompanyPage);

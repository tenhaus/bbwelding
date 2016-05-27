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

import Page from '../Page/Page';
import Style from './_CompanyPage.Style';

class CompanyPage extends React.Component {
  render() {
    return (
      <Page title='Our Company'>

        <div style={Style.fullSection}>
          <p>B&amp;B Welding Company is a 52 year old firm (45 years under current ownership) that has migrated from a portable welding shop to the Baltimore/Washington area’s most technologically advanced steel fabricator.</p>
        </div>
        
        <div style={Style.topSection}>
          {/* Section */}
          <div style={Style.halfSection} key='left'>
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
          <div style={Style.halfSection} key='right'>
            <div className="video-box">
              <iframe src="https://player.vimeo.com/video/136650292"
                width="100%" height="240px" frameborder="0"
                webkitallowfullscreen mozallowfullscreen allowfullscreen />
              </div>
          </div>
        </div>

        {/* Section */}
        <div style={Style.fullSection}>
          <RetinaImage style={Style.image} src={AiscImage} />
          <p>Add on AISC membership, a written quality control program, and the ability to electronically import designs straight from the engineers and what you get is one of the most <em>technology-driven steel fabrication</em> shops in the region.</p>
          <p>From small jobs to 500-ton jobs, B&B will complete them swifter, more affordably and with better quality.</p>
        </div>

      </Page>
    );
  }
}

export default Radium(CompanyPage);

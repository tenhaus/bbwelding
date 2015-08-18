import React from 'react';
import Radium from 'radium';

import Page from '../Page/Page';
import Style from './_SteelDayPage.Style';

class SteelDayPage extends React.Component {

  render() {
    return (
      <Page title='Register now for Steel Day 2015!'>
        <div style={Style.content}>
          <p>Attendees will tour a modern 35,000 sq ft fabrication shop with advanced CNC machinery and witness demonstrations of interoperability between engineering, detailing, estimating, production control and bar coding softwares including: Bluebeam, SDS/2, Fabsuite and P2 Systems, Infosight Corporation, Shop Data, and Peddinghaus equipment. Attendees will learn about the processes steel fabricators go through from receiving the steel through to shipping steel to the job site. Also on sight will be Hilti, Southern Galvanizing & Powder Coaters who will explain what their process is in the steel fabrication business.</p>
          <p><span style={Style.lineHead}>Date:</span>Friday, September 25th, 2015</p>
          <p><span style={Style.lineHead}>Time/Length:</span>10:00 am – 3:00 pm</p>

          <p><span style={Style.lineHead}>Location:</span>4640 North Point Blvd, Edgemere, MD 21219</p>
          <p><span style={Style.lineHead}>Directions:</span>Directions can be found <a href='/#/contact'>here</a></p>
          <p><span style={Style.lineHead}>Food:</span>Pulled Pork BBQ, Pit Beef & Turkey with all the fixings along with salads served 12:00 pm – 2:00 pm</p>
          <p><span style={Style.lineHead}>Dress Code:</span>Business casual/jeans welcome. (Ladies no open toed or high heeled shoes)</p>
          <p><span style={Style.lineHead}>Safety Gear:</span>Long pants and closed toe shoes required for facility tours. (safety glasses will be provided)</p>

          <div style={Style.formContent}>

            <h2>Register Here</h2>

            <form>
              <div className='control-group required'>
                <label for='name'>Name</label>
                <input id='name' value={this.state.name} />
                <p className='hint'>Name is mandatory</p>
              </div>

              <div className='control-group'>
                <label for='url'>Url</label>
                <input id='url' />
                <p className='hint'>Your primary site</p>
              </div>

              <div className='control-group required'>
                <label for='email'>Email</label>
                <input id='email' />
                <p className='hint'>Your email will not be published</p>
              </div>

              <div className='control-group required'>
                <label for='phone'>Phone</label>
                <input id='phone' />
                <p className='hint'>Mobile or land-line</p>
              </div>

              <button style={Style.button} type='submit'>Register</button>

            </form>

          </div>

        </div>
      </Page>
    );
  }

}

export default Radium(SteelDayPage);

import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import AltActions from '../../actions/AltActions';
import SteelDayStore from '../../stores/SteelDayStore';

import Page from '../Page/Page';
import Style from './_SteelDayPage.Style';

class SteelDayPage extends React.Component {

  constructor() {
    super();

    this.onFormChanged = this.onFormChanged.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.renderFormErrors = this.renderFormErrors.bind(this);

    this.state = {
      name: '',
      showNameError: false,
      url: '',
      email: '',
      showEmailError: false,
      phone: '',
      showPhoneError: false
    };
  }

  onFormChanged() {
    this.setState({
      name: React.findDOMNode(this.refs.nameInput).value,
      url: React.findDOMNode(this.refs.urlInput).value,
      email: React.findDOMNode(this.refs.emailInput).value,
      phone: React.findDOMNode(this.refs.phoneInput).value,
    });
  }

  submitForm(event) {
    event.preventDefault();
    var name = this.state.name.trim().length === 0;
    var email = this.state.email.trim().length === 0;
    var phone = this.state.phone.trim().length === 0;

    this.setState({
      showNameError: name,
      showEmailError: email,
      showPhoneError: phone
    });

    // Validation didn't pass
    if(name || email || phone) return;

    AltActions.submitSteelDayForm(
      this.state.name,
      this.state.url,
      this.state.email,
      this.state.phone
    );
  }

  renderFormErrors() {
    if(this.state.showNameError || this.state.showEmailError || this.state.showPhoneError) {
      return (
       <div style={Style.errorContent}>
         <p>Registration failed</p>
         <ul>
           {this.state.showNameError ? <li>Please provide a name</li> : null}
           {this.state.showPhoneError ? <li>Please provide your phone number</li> : null}
           {this.state.showEmailError ? <li>Please provide your email address</li> : null}
         </ul>
       </div>
      );
    }
  }

  render() {

    let formErrors = this.renderFormErrors();

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

            {formErrors}

            <form>
              <div className='control-group required'>
                <label htmlFor='name'>Name</label>
                <input id='name' value={this.state.name} ref='nameInput'
                  onChange={this.onFormChanged} />
                <p className='hint'>Name is mandatory</p>
              </div>

              <div className='control-group'>
                <label htmlFor='url'>Url</label>
                <input id='url' value={this.state.url} ref='urlInput'
                  onChange={this.onFormChanged} />
                <p className='hint'>Your primary site</p>
              </div>

              <div className='control-group required'>
                <label htmlFor='email'>Email</label>
                <input id='email' value={this.state.email} ref='emailInput'
                  onChange={this.onFormChanged} />
                <p className='hint'>Your email will not be published</p>
              </div>

              <div className='control-group required'>
                <label htmlFor='phone'>Phone</label>
                <input id='phone' value={this.state.phone} ref='phoneInput'
                  onChange={this.onFormChanged} />
                <p className='hint'>Mobile or land-line</p>
              </div>

              <button style={Style.button} type='submit'
                onClick={this.submitForm}>Register</button>

            </form>

          </div>

        </div>
      </Page>
    );
  }

}

export default Radium(SteelDayPage);

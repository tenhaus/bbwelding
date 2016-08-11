var alt = require('../alt');
var AltActions = require('../actions/AltActions');

class SteelDayStore {
  constructor() {
    this.registered = false;

    this.bindListeners({
      submitSteelDayForm: AltActions.SUBMIT_STEEL_DAY_FORM
    });
  }

  submitSteelDayForm() {
    console.log('here');
    this.registered = true;
  }

}

module.exports = alt.createStore(SteelDayStore, 'SteelDayStore');

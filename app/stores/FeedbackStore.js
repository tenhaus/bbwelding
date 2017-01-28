var alt = require('../alt');
var AltActions = require('../actions/AltActions');

class FeedbackStore {
  constructor() {
    this.registered = false;

    this.bindListeners({
      submitFeedbackForm: AltActions.SUBMIT_FEEDBACK_FORM
    });
  }

  submitFeedbackForm() {
    this.registered = true;
  }

}

module.exports = alt.createStore(FeedbackStore, 'FeedbackStore');

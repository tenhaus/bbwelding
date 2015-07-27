var alt = require('../alt');
var AltActions = require('../actions/AltActions');
import _ from 'lodash';

class ProjectStore {
  constructor() {
    this.projects = [];
    this.team = [];

    this.bindListeners({
      handleFetchData: AltActions.FETCH_DATA
    });
  }

  handleFetchData(content) {
    this.projects = content.projects;
    this.team = content.team;
  }
}

module.exports = alt.createStore(ProjectStore, 'ProjectStore');

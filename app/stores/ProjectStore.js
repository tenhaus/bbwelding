var alt = require('../alt');
var AltActions = require('../actions/AltActions');

class ProjectStore {
  constructor() {
    this.projects = [];

    this.bindListeners({
      handleUpdateProjects: AltActions.UPDATE_PROJECTS
    });
  }

  handleUpdateProjects(projects) {
    this.projects = projects;
  }
}

module.exports = alt.createStore(ProjectStore, 'ProjectStore');
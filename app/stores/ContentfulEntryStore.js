var alt = require('../alt');
var AltActions = require('../actions/AltActions');
import _ from 'lodash';

class ProjectStore {
  constructor() {
    this.projects = [];
    this.team = [];
    this.selectedTeamMember = {
      fields: {
        name: '',
        biography: '',
        primaryImage: {
          fields: {
            file: {
              details: {
                image: {
                  width: 0,
                  height: 0
                }
              }
            }
          }
        }

      }
    }

    this.bindListeners({
      handleFetchData: AltActions.FETCH_DATA
    });
  }

  handleFetchData(content) {
    this.projects = content.projects;
    this.team = content.team;

    if(this.team.length > 0) {
      this.selectedTeamMember = this.team[0];
    }
  }
}

module.exports = alt.createStore(ProjectStore, 'ProjectStore');

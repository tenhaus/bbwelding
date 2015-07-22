'use strict'

import './_WorkPage.scss';
import _ from 'lodash';

import React from 'react';
import AltActions from '../../actions/AltActions';
import ProjectStore from '../../stores/ProjectStore';

class WorkPage extends React.Component {
  
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    AltActions.updateProjects();
    
    this.state = {
      projectStore: ProjectStore.getState()
    };
  }
  
  componentDidMount() {
    ProjectStore.listen(this.onChange);
  }
  
  componentWillUnmount() {
    ProjectStore.unlisten(this.onChange);
  }
  
  onChange(projects) {
    this.setState({
      projectStore: projects
    });
  }
  
  renderList() {
    return _.map(this.state.projectStore.projects, entry => {
      return (
        <li>
          <a>{entry.fields.project}</a>
        </li>
      )
    });
  }
  
  render() {
    console.log(this.state.projectStore.projects);
    
    return (
      <div className="work-page">
        <div className='content-wrapper'>
          <div className='content'>
            <ul>
              {this.renderList()}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default WorkPage;

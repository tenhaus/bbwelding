'use strict'

import _ from 'lodash';

import React from 'react';
import Radium from 'radium';


import AltActions from '../../actions/AltActions';
import ProjectStore from '../../stores/ProjectStore';

import Style from './_WorkPage';

var Markdown = require( "markdown" ).markdown;
var Transition = require('react-router').Transition;

class WorkPage extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.renderProject = this.renderProject.bind(this);

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

  onProjectClick() {
    console.log('click');
    Transition.redirect('/');
  }

  getCurrentProject() {
    var selectedProject = null;

    // find the project from the url
    if(this.props.params.project) {
      selectedProject = _.findWhere(
        this.state.projectStore.projects,
        {fields: {path: this.props.params.project}}
      );
    }

    // if no project get a random one
    if(!selectedProject) {
      selectedProject = _.sample(this.state.projectStore.projects);
    }

    return selectedProject;
  }

  renderList() {
    var self = this;

    return _.map(this.state.projectStore.projects, entry => {
      var style = {};

      // Highlight the current project
      if(this.props.params.project &&
         entry.fields.path === this.props.params.project) {
        style = Style.currentProjectListItem;
      }

      return (
        <li style={[Style.projectItem, style]}
          key={entry.fields.path} onClick={self.onProjectClick}>
          <a>{entry.fields.project}</a>
        </li>
      )
    });
  }

  renderProject() {
    var project = this.getCurrentProject();
    if(!project) return;

    let images = _.map(project.fields.images, image => {
      return <img src={image.fields.file.url} style={Style.projectImage} />
    });

    let html = Markdown.toHTML(project.fields.description);
    return (
      <div>
        <h1 style={Style.title}>OUR WORK</h1>
        <div>{images}</div>
        <div dangerouslySetInnerHTML={{__html:html}} />
      </div>
    );

  }

  render() {

    let projectList = this.renderList();
    let project = this.renderProject();

    return (
      <div style={Style.base}>
        <div style={Style.contentWrapper}>
          <div style={Style.content}>
            <div style={Style.project}>
              {project}
            </div>
            <ul style={Style.projectList}>
              {projectList}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Radium(WorkPage);

'use strict'

import _ from 'lodash';

import React from 'react';
import Radium from 'radium';
var Markdown = require( "markdown" ).markdown;

import ProjectListItem from '../ProjectListItem/ProjectListItem';
import AltActions from '../../actions/AltActions';
import ProjectStore from '../../stores/ProjectStore';

import Style from './_WorkPage';

class WorkPage extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.renderProject = this.renderProject.bind(this);

    AltActions.updateProjects();
    this.state = {
      projectStore: ProjectStore.getState(),
      project: null
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

  renderList(project) {
    var self = this;

    return _.map(this.state.projectStore.projects, entry => {
      var style = {};

      // Highlight the current project
      if(project &&
         entry.fields.path === project.fields.path) {
        style = Style.currentProjectListItem;
      }

      return (
        <ProjectListItem style={[Style.projectItem, style]}
          project={entry} />
      )
    });
  }

  renderProject(project) {
    if(!project) return;

    let images = _.map(project.fields.images, image => {
      var imageSizeStyle = {
        width: image.fields.file.details.image.width,
        height: image.fields.file.details.image.height,
      };

      return (
        <img src={image.fields.file.url}
          style={[Style.projectImage, imageSizeStyle]} />
      );
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
    let currentProject = this.getCurrentProject();
    let projectList = this.renderList(currentProject);
    let project = this.renderProject(currentProject);

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

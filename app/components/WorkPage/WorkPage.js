'use strict'

import _ from 'lodash';

import React from 'react';
import Radium from 'radium';
var Markdown = require( "markdown" ).markdown;

import ProjectListItem from '../ProjectListItem/ProjectListItem';
import ContentfulEntryStore from '../../stores/ContentfulEntryStore';

import Page from '../Page/Page';
import Style from './_WorkPage.Style';

class WorkPage extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.renderProject = this.renderProject.bind(this);
    this.onMobileProjectListChange = this.onMobileProjectListChange.bind(this);

    this.state = {
      entryStore: ContentfulEntryStore.getState(),
      project: null
    };
  }

  componentDidMount() {
    ContentfulEntryStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ContentfulEntryStore.unlisten(this.onChange);
  }

  onChange(projects) {
    this.setState({
      entryStore: projects
    });
  }

  getCurrentProject() {
    var selectedProject = null;

    // find the project from the url
    if(this.props.params.project) {
      selectedProject = _.findWhere(
        this.state.entryStore.projects,
        {fields: {path: this.props.params.project}}
      );
    }

    // if no project get a random one
    if(!selectedProject) {
      selectedProject = _.sample(this.state.entryStore.projects);
    }

    return selectedProject;
  }

  renderProject(project) {
    if(!project) return;

    let images = _.map(project.fields.images, image => {
      var imageSizeStyle = {
        width: image.fields.file.details.image.width,
        maxWidth: '100%',
        height: 'auto'
      };

      return (
        <img src={image.fields.file.url}
          style={[Style.projectImage, imageSizeStyle]} />
      );
    });

    let html = Markdown.toHTML(project.fields.description);
    return (
      <div>
        <div>{images}</div>
        <div dangerouslySetInnerHTML={{__html:html}} />
      </div>
    );
  }

  renderList(project) {
    var self = this;

    return _.map(this.state.entryStore.projects, entry => {
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

  renderMobileProjectList(project) {
    var self = this;

    return _.map(this.state.entryStore.projects, entry => {
      let option = null;

      // Highlight the current project
      if(project && entry.fields.path === project.fields.path) {
        option = <option selected value={entry.fields.path}>{entry.fields.project}</option>;
      }
      else {
        option = <option value={entry.fields.path}>{entry.fields.project}</option>;
      }

      return option;
    });
  }

  onMobileProjectListChange(event) {
    var path = event.target.value;
    this.context.router.transitionTo('/work/' + path);
  }

  render() {
    let currentProject = this.getCurrentProject();
    let projectList = this.renderList(currentProject);
    let mobileProjectList = this.renderMobileProjectList(currentProject);
    let project = this.renderProject(currentProject);

    return (
      <Page title='Our Work'>

        <div style={Style.split} key='split'>
          {/* Mobile Navigation */}
          <select onChange={this.onMobileProjectListChange}
            style={Style.mobileProjectList}>
            {mobileProjectList}
          </select>

          {/* Project */}
          <div style={Style.project} key='project'>
            {project}
          </div>

          {/* Navigation */}
          <ul style={Style.projectList} key='project-list'>
            {projectList}
          </ul>
        </div>

      </Page>
    );
  }
}

WorkPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Radium(WorkPage);

import React from 'react';
import Radium from 'radium';

class ProjectListItem extends React.Component {
  constructor() {
    super();
    this.onProjectClick = this.onProjectClick.bind(this);
  }

  onProjectClick() {
    this.context.router.transitionTo('/work/' + this.props.project.fields.path);
  }

  render() {
    return (
      <li key={this.props.project.fields.path} onClick={this.onProjectClick}
        style={this.props.style}>
        <a>{this.props.project.fields.project}</a>
      </li>
    );
  }
}

ProjectListItem.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Radium(ProjectListItem);

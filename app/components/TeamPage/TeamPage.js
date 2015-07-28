import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import Style from './_TeamPage.style.js';

import ContentfulEntryStore from '../../stores/ContentfulEntryStore';
import TeamListItemRenderer from '../TeamListItemRenderer/TeamListItemRenderer';

var Markdown = require( "markdown" ).markdown;

class TeamPage extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);

    this.state = {
      entryStore: ContentfulEntryStore.getState()
    };
  }

  componentDidMount() {
    ContentfulEntryStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ContentfulEntryStore.unlisten(this.onChange);
  }

  onChange(entryStore) {
    this.setState({
      entryStore: entryStore
    });
  }

  renderListItems() {
    return _.map(this.state.entryStore.team, member => {
      return <TeamListItemRenderer key={member.name} member={member} />;
    });
  }

  render() {
    let listItems = this.renderListItems();
    let member = this.state.entryStore.selectedTeamMember;
    let html = Markdown.toHTML(member.fields.biography);

    return (
      <div className='team-page' style={Style.base}>

        <div className='member' style={Style.profile}>
          <h1 style={Style.title}>
            {member.fields.name}
          </h1>
          <img src={member.fields.primaryImage.fields.file.url}
            style={Style.profileImage} />
          <div dangerouslySetInnerHTML={{__html:html}} />
        </div>

        <div className='team'>
          <ul style={Style.teamList}>
            {listItems}
          </ul>
        </div>

      </div>
    );
  }
}

export default Radium(TeamPage);

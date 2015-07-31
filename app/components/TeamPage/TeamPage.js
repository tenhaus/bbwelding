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
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.state = {
      entryStore: ContentfulEntryStore.getState(),
      showSecondary: false
    };
  }

  onMouseOver() {
    console.log('over');
    this.setState({showSecondary: true});
  }

  onMouseOut() {
    this.setState({showSecondary: false});
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

    let profileImage = member.fields.primaryImage.fields.file.url;

    if(this.state.showSecondary) {
      profileImage = member.fields.secondaryImage.fields.file.url;
    }

    return (
      <div className='team-page' style={Style.base}>
        <div className='content' style={Style.content}>
          <div className='member' style={Style.profile} key='profile'
            onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
            <h1 style={Style.title}>
              {member.fields.name}
            </h1>
            <img src={profileImage} style={Style.profileImage}  />
            <div dangerouslySetInnerHTML={{__html:html}} />
          </div>

          <div className='team' key='team'>
            <ul style={Style.teamList}>
              {listItems}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Radium(TeamPage);

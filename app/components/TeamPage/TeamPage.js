import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import Style from './_TeamPage.style.js';
import Page from '../Page/Page';

import ContentfulEntryStore from '../../stores/ContentfulEntryStore';
import TeamListItemRenderer from '../TeamListItemRenderer/TeamListItemRenderer';

import AltActions from '../../actions/AltActions';

var Markdown = require( "markdown" ).markdown;

class TeamPage extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.renderMobileListItems = this.renderMobileListItems.bind(this);
    this.onMobileMemberChanged = this.onMobileMemberChanged.bind(this);

    this.state = {
      entryStore: ContentfulEntryStore.getState(),
      showSecondary: false
    };
  }

  onMouseOver() {
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

  onMobileMemberChanged(event) {
    var name = event.target.value;
    var member = _.findWhere(this.state.entryStore.team, {fields: {name: name}});
    AltActions.setSelectedTeamMember(member);
  }

  renderListItems() {
    return _.map(this.state.entryStore.team, member => {
      return <TeamListItemRenderer key={member.fields.name} member={member} />;
    });
  }

  renderMobileListItems() {
    var self = this;
    var selectedMemberName = self.state.entryStore.selectedTeamMember.fields.name;

    return _.map(this.state.entryStore.team, member => {
      let option = (
        <option key={member.fields.name} value={member.fields.name}>
          {member.fields.name}
        </option>
      );

      if(selectedMemberName === member.fields.name) {
        option = (
          <option selected key={member.fields.name} value={member.fields.name}>
            {member.fields.name}
          </option>
        );
      }

      return option;
    });
  }

  render() {
    let listItems = this.renderListItems();
    let mobileListItems = this.renderMobileListItems();
    let member = this.state.entryStore.selectedTeamMember;
    let html = Markdown.toHTML(member.fields.biography);

    let profileImage = null;

    if(member.fields.primaryImage) {
      profileImage = member.fields.primaryImage.fields.file.url;
      profileImage += '?w=600&fm=jpg&q=75';
    }

    if(this.state.showSecondary && member.fields.secondaryImage) {
      profileImage = member.fields.secondaryImage.fields.file.url;
      profileImage += '?w=600&fm=jpg&q=75';
    }

    return (
      <Page title={member.fields.name}>

        <div style={Style.split} key='split'>
          <div className='member' style={Style.profile} key='profile'>

            <select style={Style.mobileTeamList} key='mobile-nav'
              onChange={this.onMobileMemberChanged}>
              {mobileListItems}
            </select>

            {/* Profile */}
            <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
              <img src={profileImage} style={Style.profileImage}  />
              <div dangerouslySetInnerHTML={{__html:html}}></div>
            </div>
          </div>

          {/* Team member list */}
          <div className='team' key='team'>
            <ul style={Style.teamList}>
              {listItems}
            </ul>
          </div>
        </div>
      </Page>
    );
  }
}

export default Radium(TeamPage);

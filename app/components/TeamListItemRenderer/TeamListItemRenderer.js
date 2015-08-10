import React from 'react';
import Radium from 'radium';

import AltActions from '../../actions/AltActions';

import Style from './_TeamListItemRenderer.style';

class TeamListItemRenderer extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    AltActions.setSelectedTeamMember(this.props.member);
  }

  render() {
    let member = this.props.member;
    let profileImage = member.fields.primaryImage.fields.file.url;
    profileImage += '?w=100&fm=jpg&q=75';

    return (
      <li className='team-list-item' style={Style.base}
        onClick={this.onClick}>

        <img src={profileImage}
          style={[Style.image, this.props.style]} />
        <p>{member.fields.name}</p>

      </li>
    );
  }
}

export default Radium(TeamListItemRenderer);

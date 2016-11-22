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
   

    return (
      <li className='team-list-item' style={Style.base}
        onClick={this.onClick}>

        <p>{member.fields.name}</p>

      </li>
    );
  }
}

export default Radium(TeamListItemRenderer);

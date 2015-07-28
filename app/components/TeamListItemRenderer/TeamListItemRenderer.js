import React from 'react';
import Radium from 'radium';

import AltActions from '../../actions/AltActions';

import Style from './_TeamListItemRenderer.style';

class TeamListItemRenderer extends React.Component {

  constructor() {
    super();
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {showSecondary: false};
  }

  onMouseOver() {
    this.setState({showSecondary: true});
  }

  onMouseOut() {
    this.setState({showSecondary: false});
  }

  onClick() {
    AltActions.setSelectedTeamMember(this.props.member);
  }

  render() {
    let member = this.props.member;
    let profileImage = member.fields.primaryImage.fields.file.url;

    if(this.state.showSecondary) {
      profileImage = member.fields.secondaryImage.fields.file.url;
    }

    return (
      <li className='team-list-item' style={Style.base}
        onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}
        onClick={this.onClick}>

        <img src={profileImage}
          style={[Style.image, this.props.style]} />
        <p>{member.fields.name}</p>

      </li>
    );
  }
}

export default Radium(TeamListItemRenderer);

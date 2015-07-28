import React from 'react';
import Radium from 'radium';

import Style from './_TeamListItemRenderer.style';

class TeamListItemRenderer extends React.Component {

  constructor() {
    super();
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.state = {showSecondary: false};
  }

  onMouseOver() {
    this.setState({showSecondary: true});
    console.log('mouse over');
  }

  onMouseOut() {
    this.setState({showSecondary: false});
  }

  render() {
    let member = this.props.member;
    let profileImage = member.fields.primaryImage.fields.file.url;

    if(this.state.showSecondary) {
      profileImage = member.fields.secondaryImage.fields.file.url;
    }

    return (
      <li className='team-list-item' style={Style.base}
        onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <img src={profileImage}
          style={[Style.image, this.props.style]} />
        <p>{member.fields.name}</p>
      </li>
    );
  }
}

export default Radium(TeamListItemRenderer);

import React from 'react';
import Radium from 'radium';

class TeamListItemRenderer extends React.Component {
  render() {
    return (
      <li className='team-list-item'>
        {this.props.member.fields.name}
      </li>
    );
  }
}

export default Radium(TeamListItemRenderer);

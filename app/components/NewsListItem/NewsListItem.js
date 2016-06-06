import React from 'react';
import Radium from 'radium';

import AltActions from '../../actions/AltActions';

import Style from './_NewsListItem.style';

class NewsListItem extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    AltActions.setSelectedNewsItem(this.props.news);
  }

  render() {
    let news  = this.props.news;

    return (
      <li className='team-list-item' style={Style.base}
        onClick={this.onClick}>
        <p>{news.fields.title}</p>
      </li>
    );
  }
}

export default Radium(NewsListItem);

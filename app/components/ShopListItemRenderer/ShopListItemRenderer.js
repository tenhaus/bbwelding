import React from 'react';
import Radium from 'radium';

import AltActions from '../../actions/AltActions';

import Style from './_ShopListItemRenderer.style';

class ShopListItemRenderer extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    AltActions.setSelectedShopItem(this.props.item);
  }

  render() {

    let item = this.props.item;
    let profileImage = '';

    if(item.fields.primaryImage.hasOwnProperty('fields')) {
      profileImage = item.fields.primaryImage.fields.file.url;
    }
    profileImage += '?w=100&fm=jpg&q=75';

    return (
      <li className='team-list-item' style={Style.base}
        onClick={this.onClick}>
        <p>{item.fields.name}</p>

      </li>
    );
  }
}

export default Radium(ShopListItemRenderer);

import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import RetinaImage from 'react-retina-image';
import isRetina from 'is-retina';

import Style from './_ShopPage.style.js';
import Page from '../Page/Page';

import ContentfulEntryStore from '../../stores/ContentfulEntryStore';
import ShopListItemRenderer from '../ShopListItemRenderer/ShopListItemRenderer';

import AltActions from '../../actions/AltActions';


var Markdown = require( "markdown" ).markdown;

class ShopPage extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.renderMobileListItems = this.renderMobileListItems.bind(this);
    this.onMobileShopItemChanged = this.onMobileShopItemChanged.bind(this);

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

  onMobileShopItemChanged(event) {
    var name = event.target.value;
    var item = _.findWhere(this.state.entryStore.shop, {fields: {name: name}});
    AltActions.setSelectedShopItem(shopItem);
  }

  renderListItems() {
    return _.map(this.state.entryStore.shop, item => {
      return <ShopListItemRenderer key={item.fields.name} item={item} />;
    });
  }

  renderMobileListItems() {
    var self = this;
    var selectedShopItemName = self.state.entryStore.selectedShopItem.fields.name;

    return _.map(this.state.entryStore.shop, item => {
      let option = (
        <option key={item.fields.name} value={item.fields.name}>
          {item.fields.name}
        </option>
      );

      if(selectedShopItemName === item.fields.name) {
        option = (
          <option selected key={item.fields.name} value={item.fields.name}>
            {item.fields.name}
          </option>
        );
      }

      return option;
    });
  }


  render() {
    

    let listItems = this.renderListItems();
    let mobileListItems = this.renderMobileListItems();
    let item = this.state.entryStore.selectedShopItem;
    let html = Markdown.toHTML(item.fields.name);

    let profileImage = null;

    if(item.fields.primaryImage) {
      profileImage = item.fields.primaryImage.fields.file.url;
      profileImage += '?w=600&fm=jpg&q=75';
    }

    if(this.state.showSecondary && item.fields.secondaryImage) {
      profileImage = item.fields.secondaryImage.fields.file.url;
      profileImage += '?w=600&fm=jpg&q=75';
    }

    return (
      <Page title='Our Shop'>
        <div style={Style.topSection} key='top'>
          <p>Bluebeam, SDS/2, Fabsuite and P2 systems, Infosight Corp, Shop Data, and Peddinghaus equipment are all part of what makes up our jobs run smoothly through our shop.</p>
        </div>


        <div style={Style.split} key='split'>
          <div className='shopItem' style={Style.profile} key='profile'>

            <select style={Style.mobileTeamList} key='mobile-nav'
              onChange={this.onMobileShopItemChanged}>
              {mobileListItems}
            </select>

            {/* Profile */}
            <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
              <img src={profileImage} style={Style.profileImage}  />
              <div dangerouslySetInnerHTML={{__html:html}}></div>
            </div>
          </div>

          {/* Shop list */}
          <div className='team'>
            <ul style={Style.teamList}>
              {listItems}
            </ul>
          </div>
        </div>
      </Page>
    );
  }
}

export default Radium(ShopPage);

var alt = require('../alt');
var AltActions = require('../actions/AltActions');
import _ from 'lodash';

class ProjectStore {
  constructor() {
    this.projects = [];
    this.team = [];
    this.shop = [];
    this.steelDayContent = null;

    this.selectedTeamMember = {
      fields: {
        name: '',
        biography: '',
        primaryImage: {
          fields: {
            file: {
              details: {
                image: {
                  width: 0,
                  height: 0
                }
              }
            }
          }
        }

      }
    }

    this.selectedShopItem = {
      fields: {
        name: '',
        primaryImage: {
          fields: {
            file: {
              details: {
                image: {
                  width: 0,
                  height: 0
                }
              }
            }
          }
        }
      }
    }

    this.bindListeners({
      handleFetchData: AltActions.FETCH_DATA,
      handleSetSelectedTeamMember: AltActions.SET_SELECTED_TEAM_MEMBER,
      handleSetSelectedShopItem: AltActions.SET_SELECTED_SHOP_ITEM
    });
  }

  handleFetchData(content) {
    this.projects = content.projects;
    this.team = content.team;
    this.shop = content.shop;
    this.steelDayContent = content.steelDayContent[0];

    if(this.team.length > 0) {
      this.selectedTeamMember = this.team[0];
    }

    if(this.shop.length > 0) {
      this.selectedShopItem = this.shop[0];
    }
  }

  handleSetSelectedTeamMember(member) {
    this.selectedTeamMember = member;
  }

  handleSetSelectedShopItem(shopItem) {
    this.selectedShopItem = shopItem;
  }
}

module.exports = alt.createStore(ProjectStore, 'ProjectStore');

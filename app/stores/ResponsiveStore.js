var alt = require('../alt');
var AltActions = require('../actions/AltActions');

class ResponsiveStore {
  constructor() {
    this.showingMobileNav = false;

    this.bindListeners({
      handleToggleMobileNav: AltActions.TOGGLE_MOBILE_NAV
    });
  }

  handleToggleMobileNav() {
    this.showingMobileNav = !this.showingMobileNav;
  }
}

module.exports = alt.createStore(ResponsiveStore, 'ResponsiveStore');

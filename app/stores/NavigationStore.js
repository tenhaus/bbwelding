'use strict';

import BaseStore from './BaseStore';

import {
  NAVIGATION_UPDATED
} from '../constants/AppConstants';

class NavigationStore extends BaseStore {

  emitChange() {
    this.emit(NAVIGATION_UPDATED);
  }

  addChangeListener(callback) {
    this.on(NAVIGATION_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(NAVIGATION_UPDATED, callback);
  }
}

let store = new NavigationStore();

store.setAll([
  {
    route: 'home',
    title: 'Home'
  },
  {
    route: 'company',
    title: 'Our Company'
  },
  {
    route: 'shop',
    title: 'Our Shop'
  },
  {
    route: 'team',
    title: 'Our Team'
  },
  {
    route: 'work',
    title: 'Our Work'
  },
  {
    route: 'news',
    title: 'News'
  },
  {
    route: 'contact',
    title: 'Contact'
  },
  // {
  //   route: 'steel-day',
  //   title: 'Steel Day 2015'
  // }
]);

export default store;

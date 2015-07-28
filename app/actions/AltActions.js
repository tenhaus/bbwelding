'use strict'
import Alt from '../alt';
import Contentful from 'contentful-agent';

var client = require('contentful-agent')({
  space: 'lxziqch8v8yh',
  accessToken: 'd7258ee2b693ea6eaf66da2f9631f861a1575332dfc8f7d1c0da47d236e31c44'
});

var contentTypes = {
  projects: '3W9hNwuc8EKcosagC0GuGE',
  team: '4pbkhrIx5Co2QYoMKC2cqu'
};

class AltActions {
  fetchData() {
    client.get(contentTypes).then((content) => {
      this.dispatch(content);
    });
  }

  setSelectedTeamMember(member) {
    this.dispatch(member);
  }
}

export default Alt.createActions(AltActions);

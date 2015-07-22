'use strict'
import Alt from '../alt';
import Contentful from 'contentful';

var client = Contentful.createClient({
  space: 'lxziqch8v8yh',
  accessToken: 'd7258ee2b693ea6eaf66da2f9631f861a1575332dfc8f7d1c0da47d236e31c44',
  secure: true
});

class AltActions {
  updateProjects() {
    client.entries().then((projects) => {
      this.dispatch(projects);  
    });
    
  }
}

export default Alt.createActions(AltActions);
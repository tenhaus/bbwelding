'use strict'
import Alt from '../alt';
import Contentful from 'contentful-agent';
import request from 'superagent';

var client = require('contentful-agent')({
  space: 'lxziqch8v8yh',
  accessToken: 'd7258ee2b693ea6eaf66da2f9631f861a1575332dfc8f7d1c0da47d236e31c44'
});

var contentTypes = {
  projects: '3W9hNwuc8EKcosagC0GuGE',
  team: '4pbkhrIx5Co2QYoMKC2cqu',
  shop: 'shop',
  news: 'news',
  steelDayContent: '62PK9zHWBqGiqKEU8Cgg4U'
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

  setSelectedShopItem(item) {
    this.dispatch(item);
  }

  setSelectedNewsItem(news) {
    this.dispatch(news);
  }

  toggleMobileNav() {
    this.dispatch();
  }

  submitSteelDayForm(name, url, email, phone) {
    var toEmail = 'name: ' + name + ' email: ' + email + ' phone ' + phone + ' url: ' + url;

    var data = {
      'key': 'vSvSsvW65FgK3AY0Ru-tcQ',
      'message': {
        'from_email': 'info@bandbwelding.com',
        'to': [
            {
              'email' : 'michele@bandbwelding.com',
              'name' : 'Michele',
              'type' : 'to'
            }
            // {
            //   'email': 'chayen@gmail.com',
            //   'name': 'Chris Hayen',
            //   'type': 'to'
            // },
            // {
            //   'email': 'rrytter@jensendesignstudio.com',
            //   'name': 'Robert Rytter',
            //   'type': 'to'
            // }
          ],
        'autotext': 'true',
        'subject': 'Steel Day Registration',
        'html': toEmail
      }
    };

    request.post('https://mandrillapp.com/api/1.0/messages/send.json')
      .send(data)
      .end((err, response) => {
        this.dispatch(true);
      });
  }
}

export default Alt.createActions(AltActions);

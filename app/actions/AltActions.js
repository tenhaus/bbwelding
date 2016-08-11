'use strict'
import Alt from '../alt';
import Contentful from 'contentful-agent';

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
    var self = this;
    var toEmail =  'name: ' + name + ' email: ' + email + ' phone ' + phone + ' url: ' + url;

    var data = {

                  'FromEmail': 'info@bandbwelding.com',
                  'FromName': 'info@bandbwelding.com',
                  'Subject': 'Steel Day Registration',
                  'Html-part': toEmail,
                  'Recipients':[{
                          'email' : 'michele@bandbwelding.com',
                          'name' : 'Michele',
                          'type' : 'to'
                         },{
                          'email' : 'jwidener08@gmail.com',
                          'name' : 'test',
                          'type' : 'to'
                  }]
        };

      emailjs.send("b_b_welding","template_xcqE4MOa", data)
      .then(
        function(response) {
          console.log("SUCCESS", response);
          self.dispatch();
        },
        function(error) {
          console.log("FAILED", error);
        }

      );

    }
}

export default Alt.createActions(AltActions);

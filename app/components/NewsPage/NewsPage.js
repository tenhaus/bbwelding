import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import Style from './_NewsPage.Style';
import Page from '../Page/Page';

import ContentfulEntryStore from '../../stores/ContentfulEntryStore';
import NewsListItem from '../NewsListItem/NewsListItem';

import AltActions from '../../actions/AltActions';

var Markdown = require( "markdown" ).markdown;

class NewsPage extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.renderNewsItem = this.renderNewsItem.bind(this);
    this.renderMobileListItems = this.renderMobileListItems.bind(this);
    this.onMobileNewsListChanged = this.onMobileNewsListChanged.bind(this);

    this.state = {
      entryStore: ContentfulEntryStore.getState(),
      news: null
    };
  }

  componentDidMount() {
    ContentfulEntryStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ContentfulEntryStore.unlisten(this.onChange);
  }

  onChange(news) {
    this.setState({
      entryStore: entryStore
    });
  }

  onMobileNewsListChanged(event) {
    var name = event.target.value;
    var news = _.findWhere(this.state.entryStore.news, {fields: {name: title}});
    AltActions.setSelectedNewsItem(news);
  }

  renderNewsList(){
    return _.map(this.state.entryStore.news, item => {
      return <NewsListItem key={item.fields.title} item={item} />;
    });

  }

  renderMobileNewsList() {
    var self = this;

    var selectedNewsItemTitle = self.state.entryStore.selectedNewsItem.fields.title;

    return _.map(this.state.entryStore.news, item => {
     let option = (
        <option key={item.fields.title} value={item.fields.title}>
          {item.fields.title}
        </option>
      );

      if(selectedNewsItemTitle === item.fields.title) {
        option = (
          <option selected key={item.fields.title} value={item.fields.title}>
            {item.fields.title}
          </option>
        );
      return option;
    });
  }


  render() {
    let newsList = this.renderNewsList();
    let mobileNewsList = this.renderMobileNewsList();
    let news = this.state.entryStore.selectedNewsItem;
    let html = Markdown.toHTML(item.fields.content);

    return (
      <Page title='News'>

        <div style={Style.split} key='split'>
          {/* Mobile Navigation */}
          <select onChange={this.onMobileNewsListChanged} key='mobile-nav'
            style={Style.mobileNewsList}>
            {mobileNewsList}
          </select>

          {/* news */}
          <div style={Style.news} key='news'>
           <div dangerouslySetInnerHTML={{__html:html}}></div>
          </div>

          {/* Navigation */}
          <div className="news">
            <ul style={Style.newsList}>
              {newsList}
            </ul>
          </div>
        </div>

      </Page>
    );
  }
}

export default Radium(NewsPage);

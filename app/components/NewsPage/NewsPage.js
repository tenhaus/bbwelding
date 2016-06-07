import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import Style from './_NewsPage.style.js';
import Page from '../Page/Page';

import ContentfulEntryStore from '../../stores/ContentfulEntryStore';

import AltActions from '../../actions/AltActions';

var Markdown = require( "markdown" ).markdown;

class NewsPage extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);

    this.state = {
      entryStore: ContentfulEntryStore.getState()
    };
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


  renderListItems() {

    return _.map(this.state.entryStore.news, news => {
      let html = Markdown.toHTML(news.fields.content);
      console.log(news)
      return (
        <div>
           <h3>{news.fields.title}</h3> 
           <div dangerouslySetInnerHTML={{__html:html}}></div>
         </div>
      );
       
    });
  }


  render() {
    
    let listItems = this.renderListItems();
    let item = this.state.entryStore.selectedNewsItem;
    
    return (
      <Page title='News'>
        
        <div style={Style.split} key='split'>

          {/* News list */}
          <div className='news'>
           
              {listItems}
           
          </div>
        </div>
      </Page>
    );

  }
}

export default Radium(NewsPage);

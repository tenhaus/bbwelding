import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import Style from './_NewsPage.style.js';
import Page from '../Page/Page';

import ContentfulEntryStore from '../../stores/ContentfulEntryStore';

import AltActions from '../../actions/AltActions';

var Markdown = require( "markdown" ).markdown;
var Lightbox = require('react-lightbox');

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
      return (
        <div>
           <h3>{news.fields.title}</h3> 
           <p style={Style.newsDate} key="newsDate">{news.fields.date}</p>
           <div dangerouslySetInnerHTML={{__html:html}}></div>
         </div>
      );
    });
  }

  // trying to figure out:

  // renderImageGallery(){
  //  return _.map(this.state.entryStore.news, news => {
  //   let imageGallery = news.fields.imageGallery;
  //   return _.map(this.imageGallery, url => {
  //     let imageUrl = [];
  //     imageUrl.push(imageGallery.fields.file.url);
  //     return imageUrl;
  //   });
  //  });
  // }

  renderControls(){
      return DOM.div({
        className: 'my-controls'
      }, 
        DOM.div({
          className: 'my-button my-button-left',
          onClick: this.props.backward
        }, '<'),
        DOM.div({
          className: 'my-button my-button-right',
          onClick: this.props.forward
        }, '>')
      );
  }


  render() {
    let listItems = this.renderListItems();
    let item = this.state.entryStore.selectedNewsItem;
    let controls = this.renderControls();
    // let imageGallery = this.renderImageGallery();
    let newsImage = null;
 
    if(item.fields.primaryImage) {
      newsImage = item.fields.primaryImage.fields.file.url;
    }
    
    // console.log(imageGallery);
   
    return (
      <Page title='News'>
        
        <div style={Style.split} key='split'>

          <div style={Style.imageSection} key="image">
            <div>
            
              <Lightbox pictures={['http:'+ newsImage]} style={Style.newsImage} key="news-image"
              keyboard controls={controls}/> 
            
             
            </div>
          </div>

          {/* News list */}
          <div style={Style.newsSection} key="news">
           
              {listItems}
           
          </div>
        </div>
      </Page>
    );

  }
}

export default Radium(NewsPage);

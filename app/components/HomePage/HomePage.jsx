'use strict';

import './_HomePage.scss';

import _ from 'lodash';
import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
var Markdown = require( "markdown" ).markdown;

import RetinaImage from 'react-retina-image';
import AbstractImage from './images/building1.jpg';
import AbstractImageRetina from './images/building1@2x.jpg';

import ContentfulEntryStore from '../../stores/ContentfulEntryStore';
import Page from '../Page/Page';
import Style from './_newsSection.Style';

class HomePage extends React.Component {


  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.renderNewsItem = this.renderNewsItem.bind(this);

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
      entryStore: news
    });
  }

  getCurrentNewsItem() {
    var selectedNews = null;

    // find the project from the url
    if(this.props.params.news) {
      selectedNews = _.findWhere(
        this.state.entryStore.news,
        {fields: {path: this.props.params.news}}
      );
    }

    // if no project get a random one
    if(!selectedNews) {
      selectedNews = _.sample(this.state.entryStore.news);
    }

    return selectedNews;
  }

  renderNewsItem(news) {
    if(!news) return;

    let html = Markdown.toHTML(news.fields.content);
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:html}} />
      </div>
    );
  }

  render() {
    let currentNewsItem = this.getCurrentNewsItem();
    let newsItem = this.renderNewsItem(currentNewsItem);

    return (

      <div className='home-page'>
        <RetinaImage className='welder-image' src={AbstractImage} />

        <div className='copy'>
         <h1>The smartest working shop in the steel business</h1>
-        <p>ONE &quot;B&quot; FOR BRAINS; ONE &quot;B&quot; FOR BRAWN.</p>

        </div>

        <div style={Style.fullSection} className="news-section">
          <h2>News</h2>

          <Link to="/news">
           <h3>B&amp;B Welding featured in a new Baltimore County video.</h3>
           <p>Successful Baltimore County Businesses Little Crystal Bijoux and B&B Welding are profiled in this episode. Made in Baltimore County showcases entrepreneurs and shows you how you can use the resources of BCPL to start your own successful business.</p>
           <a href="https://www.youtube.com/watch?v=EU_e4eS5_iY&feature=youtu.be" target="_blank"> Made in Baltimore County Episode 1</a>
          </Link>
         
        </div>

      </div>
 
    );
  }
}


export default HomePage;

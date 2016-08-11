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
      selectedNewsItem = _.findWhere(
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
         
            <p>SAVE THE DATE:</p>
            <p> Friday, September 30, 2016 - 10:00 - 3:00</p>   
             <Link to="/steel-day" className="steel-day-link">
              <h1>AISC STEEL DAY</h1>
               <p>Click to Register</p>
             </Link>

            <p>and B&amp;B Welding CELEBRATION - 45 Years of Excellence</p>

        </div>

        <div style={Style.fullSection} className="news-section">
          <h2>News</h2>

          <Link to="/news">
           {newsItem}
          </Link>
         
        </div>

      </div>
 
    );
  }
}


export default HomePage;

import React from 'react';
import Radium from 'radium';

import Style from './_Page.Style';

class Page extends React.Component {

  render() {
    return (
      <div className='page' style={Style.base} key='page'>
        <div id="contact-page" style={Style.base}>
          <div style={Style.contentWrapper}>
            <div style={Style.content}>
              <h1 style={Style.title}>{this.props.title}</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Page);

import React from 'react';
import Radium from 'radium';

import Style from './Page.Style';

class Page extends React.Component {

  render() {
    return (
      <div className='page' style={Style.base}>
        
      </div>
    );
  }
}

export default Radium(Page);

import React, { Component, PropTypes } from 'react';

class ModuleDemo extends Component {

  render(){
	  
    return (
      <div className="gnm-home-page-takeover">
	<h2 className='demo_text'>{this.props.text}</h2>
	<p>This text is not editable!</p>
      </div>
    );
	  
  }
}

export default ModuleDemo;

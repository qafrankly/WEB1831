import React, { Component, PropTypes } from 'react';

class ModuleDemo extends Component {

  render(){
	  
    return (
      <div className='PageTitle-text demo_text'>
	<h2>{this.props.text}</h2>
      </div>
    );
	  
  }
}

export default ModuleDemo;

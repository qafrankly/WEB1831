import React, { Component, PropTypes } from 'react';

class ModuleDemo extends Component {

  render(){
	  
    return (
      <div className='PageTitle-text'>
	<br/>
	<h2 className='demo_text'>{this.props.text}</h2>
	<br/>
	This text is not editable!
      </div>
    );
	  
  }
}

export default ModuleDemo;

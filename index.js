import React, { Component, PropTypes } from 'react';

class ModuleDemo extends Component {

  render(){
	  
    return (
      <div>
	<h2 className="demo_text">{this.props.text}</h2>
      </div>
    );
	  
  }
}

export default ModuleDemo;

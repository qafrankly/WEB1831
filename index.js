import React, { Component, PropTypes } from 'react';
// import Image from 'components/Image';
// 	<Image width={280} src={'http://kwtv.images.worldnow.com/images/14434055_G.jpg'} alt={'alt'} />

class ModuleDemo extends Component {

  render(){
	  
    return (
      <div className='FranklyModulesDemo'>
	<h2 className='demo_text'>{this.props.text}</h2>
	<p>This text is not editable!</p>
      </div>
    );
	  
  }
}

export default ModuleDemo;

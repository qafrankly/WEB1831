import React, { Component } from 'react';

class HomePageTakeover extends Component {

  constructor(props) { //gives us acces to props, fires long before page load
    super(props) //assigns props to this.props
    this.state = {} /* great place to assign default state */
  }
  // ajax = (url,callback) => {
  //   let req = new XMLHttpRequest();
  //   req.open("GET", url);
  //   req.onload = function() {
  //       if (req.status === 200) {
  //           callback(req.response);
  //       } else {
  //           new Error(req.statusText);
  //       }
  //   };
  //
  //   req.onerror = function() {
  //       new Error("Network error");
  //   };
  //
  //   req.send();
  // }

  componentWillMount() { /* OPTIONAL, fires before initial mount into DOM. Setting state here or editing props here will not cause a re-render*/ }
  componentDidMount() {/* OPTIONAL, fires after initial rendering ( based on initial default state ), DOM can be accessed here if needed. */ }

  componentWillReceiveProps(nextProps) {/* OPTIONAL, fired when parent component has re-rendered or made other changes to the props, allows us to conditionaal change our state only when needed*/ }
  shouldComponentUpdate(nextProps, nextState) {/* OPTIONAL, allows us to intelligently decide if we really need to re-render (BOOL)*/
    return true
  }
  componentWillUpdate(nextProps, nextState) {/*OPTIONAL (and cannot call setState in here) last opportunity to massage data before render */ }
  componentDidUpdate(prevProps, prevState) { /* OPTIONAL Here we have access to the DOM again, */ }

  componentWillUnmount() {/* GREAT place to kill any network requests, or any Timeout or Interval functions trying up resources. Last stop before we are destroyed.  */ }


  render() { //REQUIRED
    return (<div className="gnm-home-page-takeover">TAKEOVER</div>)
  }
}

export default HomePageTakeover;

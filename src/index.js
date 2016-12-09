import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import snowStorm from './snowstorm.js';

export default class SnowStorm extends Component {
  constructor(props, context) {
    super(props, context);
    this.storm = new snowStorm(props);
  }

  componentWillUnmount() {
    this.storm.stop();
    Array.from(document.getElementsByClassName('___snowStorm___')).forEach( element => {
      element.parentNode.removeChild(element);
    });
  }

  render() {
    return null;
  }
}

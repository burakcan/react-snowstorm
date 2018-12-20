import PropTypes from 'prop-types';
import React, { Component } from 'react';
import snowStorm from './snowstorm.js';

export default class SnowStorm extends Component {

  static propTypes = {
    autoStart: PropTypes.bool
  }

  static defaultProps = {
    autoStart: true
  }

  constructor(props, context) {
    super(props, context);
    this.storm = new snowStorm(props);
  }

  componentDidMount() {
    const { autoStart }  = this.props;
    if(autoStart){
      this.storm.doStart();
    }
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

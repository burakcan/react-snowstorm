import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SnowStorm from 'react-snowstorm';

import 'normalize.css';
import 'styles/global'

export default class Main extends Component {

  render() {
    return (
      <main>
        <h1 ref='title'>React-snowstorm</h1>
        <h2 ref='subtitle'>A Snow Effect component for React.</h2>
        <SnowStorm />
      </main>
    )
  }
}

import React, { Component } from 'react';
import './App.css';
import Head from './Head.js'
import Body from './Body.js'

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Body />
      </div>
    );
  }
}

export default App;

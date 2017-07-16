// Node modules import
import React, { Component } from 'react';

// Components import
import Header from './header.js'

// Layout component
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <div className='container'>
          {this.props.children}
        </div>
        FOOTER
      </div>
    )
  }
}

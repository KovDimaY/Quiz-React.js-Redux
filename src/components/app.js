// Node modules import
import React, { Component } from 'react';

// Components import
import Header from './header.js'
import Footer from './footer.js'

// Layout component
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header location={this.props.location.pathname}/>
        <div className='container'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

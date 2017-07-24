// Node modules import
import React, { Component } from 'react';

// This component is a simple header for the page
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="clearfix header-info">
          <nav className="header-buttons">
            <ul className="nav nav-pills pull-right">
              <li role="presentation" className="active"><a href="/">Home</a></li>
              <li role="presentation"><a href="/about">About</a></li>
              <li role="presentation"><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <h3 className="text-muted project-name">SUPER QUIZ</h3>
        </div>
      </div>
    )
  }
}

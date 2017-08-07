// Node modules import
import React, { Component } from 'react';

// This component is a simple header for the page
export default class Header extends Component {

  makeActiveBasedOnPath(path) {
    if (this.props.location === path) {
      return "active";
    }
    return "";
  }

  render() {
    const path = {
      home: "/",
      about: "/about",
      contact: "/contact"
    }
    return (
      <div className='header'>
        <div className="clearfix header-info">
          <nav className="header-buttons">
            <ul className="nav nav-pills pull-right">
              <li role="presentation"
                  className={this.makeActiveBasedOnPath(path.home)}>
                  <a href={path.home}>Home</a>
              </li>
              <li role="presentation"
                  className={this.makeActiveBasedOnPath(path.about)}>
                  <a href={path.about}>About</a>
              </li>
              <li role="presentation"
                  className={this.makeActiveBasedOnPath(path.contact)}>
                  <a href={path.contact}>Contact</a>
              </li>
            </ul>
          </nav>
          <h3 className="text-muted project-name">SUPER QUIZ</h3>
        </div>
      </div>
    )
  }
}

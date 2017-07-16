// Node modules import
import React, { Component } from 'react';

// This component will show question to the user
export default class QuestionInfo extends Component {
  render() {
    return (
      <div className='question-info'>
        <h1 className="title">Question #123141</h1>
        <h2 className="category">Category: Energy</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }
}

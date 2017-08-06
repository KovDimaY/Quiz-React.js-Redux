// Node modules import
import React, { Component } from 'react';

// This component will show information how to solve https/http problem
export default class ErrorMessage extends Component {
  render() {
    return (
      <div className='error-background'>
        <div className='error-window'>
          <h1>Oops...</h1>

          <p>We got an error, trying to load a question from the server.
            Looks like your browser is blocking http request.
            To avoid this problem, you should disable default
            protection of your browser:
          </p>
        </div>
      </div>
    )
  }
}

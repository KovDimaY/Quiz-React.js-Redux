// Node modules import
import React, { Component } from 'react';

// 404 page
export default class NotFound extends Component {
  render() {
    return (
      <div className='container not-found-page'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='sad-picture'></div>
          </div>

          <div className='col-md-8'>
            <div className='text'>
              <h1>404</h1>
              <h2>Page not found</h2>
              <p>If you see this page, probably you have typed the adress
                incorrectly or you are just testing my 404 page :)
              </p>
              <h3>Have a nice day!</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

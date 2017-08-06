// Node modules import
import React, { Component } from 'react';

// This component will show information how to solve https/http problem
export default class ErrorMessage extends Component {
  closeErrorMessage() {
    this.props.hideError();
  }

  render() {
    if (this.props.showError) {
      return (
        <div className='error-message'>
          <div className='error-background'>
            <div className='error-window'>
              <i
                className="fa fa-times close"
                aria-hidden="true"
                onClick={this.closeErrorMessage.bind(this)}></i>
              <h1>Oops...</h1>

              <p>We got an error, trying to load a question from the server.
                Looks like your browser is blocking mixed https/http requests.
                To avoid this problem, try to load this page over http.
              </p>

              <div>
                <h4>
                  To load this page over HTTP click the picture below:
                </h4>

                <a
                  className='tip-image-chrome picture'
                  href='http://vast-thicket-75327.herokuapp.com/'>
                </a>
              </div>

            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

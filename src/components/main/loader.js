// Node modules import
import React, { Component } from 'react';

// This component will show loader while question is not ready yet
export default class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
        <span className="sr-only">Loading...</span>
        {this.props.text && (
          <div className="custom-label">{this.props.text}</div>
        )}
      </div>
    )
  }
}

// Node modules import
import React, { Component } from 'react';

// This component will show question to the user
export default class ProgressMessage extends Component {
  render() {
    return (
      <div className='progress-message'>
        {this.props.answerCondition === true && (
          <div className='success-message'>
            Correct!
          </div>
        )}

        {this.props.answerCondition === false && (
          <div className='failure-message'>
            Not Correct!
          </div>
        )}
      </div>
    )
  }
}

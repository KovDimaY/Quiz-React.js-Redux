// Node modules import
import React, { Component } from 'react';

// This component will show question to the user
export default class ContinueQuiz extends Component {
  render() {
    return (
      <div>
        {this.props.answerCondition === true && (
          <div className='next-question'>
            Next Question
          </div>
        )}
      </div>
    )
  }
}

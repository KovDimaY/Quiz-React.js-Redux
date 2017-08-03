// Node modules import
import React, { Component } from 'react';

// Import constants with messages
import { CORRECT_ANSWER, WRONG_ANSWER } from '../../constants/phrases.js'

// This component will show a message depending on the result of the answer
export default class ProgressMessage extends Component {

  correctAnswerMessage() {
    const randomIndex = Math.floor(Math.random() * CORRECT_ANSWER.length);
    if (CORRECT_ANSWER[randomIndex]) {
      return CORRECT_ANSWER[randomIndex]
    } else {
      return 'Correct!'
    }
  }

  wrongAnswerMessage() {
    const randomIndex = Math.floor(Math.random() * WRONG_ANSWER.length);
    if (WRONG_ANSWER[randomIndex]) {
      return WRONG_ANSWER[randomIndex]
    } else {
      return 'Wrong!'
    }
  }

  render() {
    return (
      <div className='progress-message'>
        {this.props.answerCondition === true && (
          <div className='success-message'>
            {this.correctAnswerMessage()}
          </div>
        )}

        {this.props.answerCondition === false && (
          <div className='failure-message'>
            {this.wrongAnswerMessage()}
          </div>
        )}
      </div>
    )
  }
}

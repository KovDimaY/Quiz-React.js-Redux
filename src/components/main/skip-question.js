// Node modules import
import React, { Component } from 'react';

// This component will show question to the user
export default class SkipQuestion extends Component {
  receiveNextQuestion() {
    this.props.removeQuestion();
    this.props.fetchQuestion();
    this.props.incrementTotalCount();
  }

  render() {
    if (this.props.answerCondition !== true) {
      return (
        <div className='skip-question noselect' onClick={this.receiveNextQuestion.bind(this)}>
          Skip this question
        </div>
      )
    } else {
      return null
    }
  }
}

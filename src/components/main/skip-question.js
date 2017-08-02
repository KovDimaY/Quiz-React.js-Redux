// Node modules import
import React, { Component } from 'react';

// Constants import
import { SKIP_PENALTY } from '../../constants/questions.js'

// This component will show question to the user
export default class SkipQuestion extends Component {
  receiveNextQuestion() {
    this.props.removeQuestion();
    this.props.fetchQuestion();
    this.props.incrementTotalCount();
    this.props.changeScore(SKIP_PENALTY);
  }

  render() {
    if (this.props.answerCondition !== true) {
      return (
        <div className='skip-question noselect' onClick={this.receiveNextQuestion.bind(this)}>
          <p>Skip this question</p>
          <p className='tip'>{`(${SKIP_PENALTY} points)`}</p>
        </div>
      )
    } else {
      return null
    }
  }
}

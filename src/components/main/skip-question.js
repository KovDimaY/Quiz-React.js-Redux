// Node modules import
import React, { Component } from 'react';

// This component will show question to the user
export default class SkipQuestion extends Component {
  receiveNextQuestion() {
    console.log('Skip cklicked');
    this.props.fetchQuestion();
    this.props.incrementTotalCount();
  }

  render() {
    return (
      <div className='skip-question' onClick={this.receiveNextQuestion.bind(this)}>
        Skip
      </div>
    )
  }
}

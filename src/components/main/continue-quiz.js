// Node modules import
import React, { Component } from 'react';

// This component will show question to the user
export default class ContinueQuiz extends Component {
  nextQuestion() {
    this.props.fetchQuestion();
    this.props.incrementTotalCount();
    this.props.incrementCorrectCount();
    this.props.changeScore(this.props.questionValue);
  }

  render() {
    return (
      <div>
        {this.props.answerCondition === true && (
          <div onClick={this.nextQuestion.bind(this)}
            className='next-question noselect'>
            Next Question
          </div>
        )}
      </div>
    )
  }
}

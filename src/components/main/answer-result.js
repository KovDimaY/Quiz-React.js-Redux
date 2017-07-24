// Node modules import
import React, { Component } from 'react';

// Components import
import ProgressMessage from './progress-message.js'

// This component will show data about user activity
export default class AnswerResult extends Component {
  moveCharacter(char) {
    this.props.relocateToProposition(char);
  }

  showCharacters(array) {
    return (
      array.map(item =>
        <li className={`${item.value === ' ' && 'space-as-character'} inline-block character noselect`}
            key={item.id}
            onClick={e => this.moveCharacter(item)}>
          {item.value}
        </li>
      )
    )
  }

  giveClassBasedOnResult() {
    if (this.props.answerCondition === true) {
      return 'success-answer';
    }
    if (this.props.answerCondition === false) {
      return 'failure-answer';
    }
    return ''
  }

  render() {
    return (
      <div className='answer-result'>
        <ProgressMessage answerCondition={this.props.answerCondition}/>

        <div className={`answer-container ${this.giveClassBasedOnResult()}`}>
          <div className='characters-place'>
            <ul className='inline-list'>
              {this.showCharacters(this.props.characters)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

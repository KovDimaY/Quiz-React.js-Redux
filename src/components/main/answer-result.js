// Node modules import
import React, { Component } from 'react';

// Components import
import ProgressMessage from './progress-message.js'

// This component will show area to construct the final answer
export default class AnswerResult extends Component {
  moveCharacter(char) {
    if (!this.props.answerCondition) {
      this.props.relocateToProposition(char);
    }
  }

  showCharacters(array) {
    return (
      array.map(item =>
        <li className={`${item.value === ' ' && 'space-as-character'}
                        inline-block character noselect
                        ${this.giveClassBasedOnResultToChar()}`}
            key={item.id}
            onClick={e => this.moveCharacter(item)}>
          {item.value}
        </li>
      )
    )
  }

  giveClassBasedOnResultToBox() {
    if (this.props.answerCondition === true) {
      return 'success-answer';
    }
    if (this.props.answerCondition === false) {
      return 'failure-answer';
    }
    return ''
  }

  giveClassBasedOnResultToChar() {
    if (this.props.answerCondition === true) {
      return 'success-character';
    }
    if (this.props.answerCondition === false) {
      return 'failure-character';
    }
    return ''
  }

  render() {
    return (
      <div className='answer-result'>
        <ProgressMessage answerCondition={this.props.answerCondition}/>

        <div className={`answer-container ${this.giveClassBasedOnResultToBox()}`}>
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

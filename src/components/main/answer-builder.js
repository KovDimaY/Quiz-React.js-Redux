// Node modules import
import React, { Component } from 'react';

// This component will show the characters to build the answer
export default class AnswerBuilder extends Component {
  moveCharacter(char) {
    this.props.relocateToBoard(char);
    this.props.checkAnswer();
  }

  showCharacters(array) {
    return (
      array.map(item =>
        <li className={`${item.value === ' ' && 'space-as-character'}
                        inline-block character noselect`}
            key={item.id}
            onClick={e => this.moveCharacter(item)}>
          {item.value}
        </li>
      )
    )
  }

  render() {
    return (
      <div className='answer-builder'>
        <div className='answer-container'>
            <ul className='inline-list'>
              {this.showCharacters(this.props.characters)}
            </ul>
        </div>
      </div>
    )
  }
}

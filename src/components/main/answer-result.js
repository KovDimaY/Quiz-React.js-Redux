// Node modules import
import React, { Component } from 'react';

// This component will show data about user activity
export default class AnswerResult extends Component {
  render() {
    return (
      <div className='answer-builder'>
        <div className='answer-container'>
          <div className='characters-place'>
            <ul className='inline-list'>
              <li className='inline-block character noselect'>
                B
              </li>
              <li className='inline-block character noselect'>
                a
              </li>
              <li className='inline-block character noselect'>
                d
              </li>
              <li className='inline-block character noselect space-as-character'>

              </li>
              <li className='inline-block character noselect'>
                C
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

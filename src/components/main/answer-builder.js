// Node modules import
import React, { Component } from 'react';

// This component will show data about user activity
export default class AnswerBuilder extends Component {
  render() {
    return (
      <div className='answer-builder'>
        <div className='answer-container'>
          <div className='characters-place'>
            <ul className='inline-list'>
              <li className='inline-block character'>
                A
              </li>
              <li className='inline-block character'>
                b
              </li>
              <li className='inline-block character'>

              </li>
              <li className='inline-block character'>
                C
              </li>
              <li className='inline-block character'>
                d
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

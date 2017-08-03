// Node modules import
import React, { Component } from 'react';

// This component will show data about user activity (score and statistics)
export default class ActivityLog extends Component {
  render() {
    return (
      <div className='activity-log'>
        <div className='row'>
          <div className='col-xs-4'>
            <div className='correct-answers'>
              Correct Answers: {this.props.correctCount}
            </div>
          </div>

          <div className='col-xs-4'>
            <div className='score' title="Your score">
              {this.props.score}
            </div>
          </div>

          <div className='col-xs-4'>
            <div className='total-questions'>
              Total Questions: {this.props.totalCount}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

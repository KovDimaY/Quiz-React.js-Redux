// Node modules import
import React, { Component } from 'react';

// This component will show data about user activity
export default class ActivityLog extends Component {
  render() {
    return (
      <div className='activity-log'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='correct-answers'>
                Correct Answers: {this.props.correctCount}
              </div>
            </div>
            <div className='col-md-6'>
              <div className='total-questions'>
                Total Answers: {this.props.totalCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

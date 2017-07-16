// Node modules import
import React, { Component } from 'react';

// Components import
import ActivityLog from './main/activity-log.js'
import QuestionInfo from './main/question-info.js'

// Main page
export default class MainPage extends Component {
  render() {
    return (
      <div className='container'>
        <div className='main-page'>
          <ActivityLog />
          <QuestionInfo />
        </div>
      </div>
    )
  }
}

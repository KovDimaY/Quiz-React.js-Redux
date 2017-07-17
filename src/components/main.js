// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestion } from '../actions/questions';

// Components import
import ActivityLog from './main/activity-log.js'
import QuestionInfo from './main/question-info.js'

// Main page
class MainPage extends Component {
  componentWillMount() {
    this.props.fetchQuestion();
  }

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

export default connect(null, { fetchQuestion })(MainPage)

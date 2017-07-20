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

  testOutput(data) {
    if (data === null) {
      return <h3>Loading...</h3>
    } else {
      return <h3>{data.question}</h3>
    }
  }

  render() {
    console.log(`this is transformed state: `, this.props.question);
    return (
      <div className='container'>
        <div className='main-page'>
          <ActivityLog />
          <QuestionInfo />
          {this.testOutput(this.props.question)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    question: state.questions.question
  }
}

export default connect(mapStateToProps, { fetchQuestion })(MainPage)

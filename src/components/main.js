// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchQuestion,
  incrementTotalCount,
  relocateToBoard
} from '../actions/questions';

// Components import
import ActivityLog from './main/activity-log.js'
import QuestionInfo from './main/question-info.js'
import Loader from './main/loader.js'
import SkipQuestion from './main/skip-question.js'
import AnswerBuilder from './main/answer-builder.js'
import AnswerResult from './main/answer-result.js'

// Main page
class MainPage extends Component {
  componentWillMount() {
    this.props.fetchQuestion();
  }

  render() {
    return (
      <div className='container'>
        <div className='main-page'>
          <ActivityLog totalCount={this.props.totalCount}/>
          {this.props.question ? (
              <div className='container'>
                <QuestionInfo question={this.props.question}/>
                <SkipQuestion
                  fetchQuestion={this.props.fetchQuestion}
                  incrementTotalCount={this.props.incrementTotalCount}/>
                <AnswerResult />
                <AnswerBuilder
                  characters={this.props.charsInProposition}
                  relocateToBoard={this.props.relocateToBoard}/>

              </div>
            ) :
              <Loader />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    question: state.questions.question,
    totalCount: state.questions.totalCount,
    charsInProposition: state.questions.charsInProposition
  }
}

export default connect(
  mapStateToProps,
  {
    fetchQuestion,
    incrementTotalCount,
    relocateToBoard
  }
)(MainPage)

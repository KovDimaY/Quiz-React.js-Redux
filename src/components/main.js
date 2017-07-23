// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchQuestion,
  incrementTotalCount,
  relocateToBoard,
  relocateToProposition,
  checkAnswer
} from '../actions/questions';

// Components import
import ActivityLog from './main/activity-log.js'
import QuestionInfo from './main/question-info.js'
import Loader from './main/loader.js'
import SkipQuestion from './main/skip-question.js'
import AnswerBuilder from './main/answer-builder.js'
import AnswerResult from './main/answer-result.js'
import ContinueQuiz from './main/continue-quiz.js'

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
                <AnswerResult
                  characters={this.props.charsOnBoard}
                  relocateToProposition={this.props.relocateToProposition}/>
                <AnswerBuilder
                  characters={this.props.charsInProposition}
                  relocateToBoard={this.props.relocateToBoard}
                  checkAnswer={this.props.checkAnswer}/>

              </div>
            ) :
              <Loader />
          }
          <ContinueQuiz />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    question: state.questions.question,
    totalCount: state.questions.totalCount,
    charsInProposition: state.questions.charsInProposition,
    charsOnBoard: state.questions.charsOnBoard,
  }
}

export default connect(
  mapStateToProps,
  {
    fetchQuestion,
    incrementTotalCount,
    relocateToBoard,
    relocateToProposition,
    checkAnswer
  }
)(MainPage)

// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchQuestion,
  removeQuestion,
  incrementTotalCount,
  incrementCorrectCount,
  relocateToBoard,
  relocateToProposition,
  checkAnswer,
  changeScore,
  hideError
} from '../actions/questions';

// Components import
import ActivityLog from './main/activity-log.js'
import QuestionInfo from './main/question-info.js'
import Loader from './main/loader.js'
import ErrorMessage from './main/error-message.js'
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
      <div className='main-page'>
          <ActivityLog
            totalCount={this.props.totalCount}
            correctCount={this.props.correctCount}
            score={this.props.score}/>
          {this.props.question ? (
              <div className='body-question'>
                <QuestionInfo question={this.props.question}/>

                <SkipQuestion
                  fetchQuestion={this.props.fetchQuestion}
                  removeQuestion={this.props.removeQuestion}
                  incrementTotalCount={this.props.incrementTotalCount}
                  answerCondition={this.props.answerCondition}
                  changeScore={this.props.changeScore}/>

                <AnswerResult
                  characters={this.props.charsOnBoard}
                  relocateToProposition={this.props.relocateToProposition}
                  answerCondition={this.props.answerCondition}/>

                {this.props.answerCondition === null ? (
                  <AnswerBuilder
                    characters={this.props.charsInProposition}
                    relocateToBoard={this.props.relocateToBoard}
                    checkAnswer={this.props.checkAnswer}/>
                ) : (
                  <ContinueQuiz
                    answerCondition={this.props.answerCondition}
                    fetchQuestion={this.props.fetchQuestion}
                    incrementTotalCount={this.props.incrementTotalCount}
                    incrementCorrectCount={this.props.incrementCorrectCount}
                    changeScore={this.props.changeScore}
                    questionValue={this.props.question.value}/>
                )}
              </div>
            ) :
              <Loader />
          }
          <ErrorMessage
            showError={this.props.showError}
            hideError={this.props.hideError}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    question: state.questions.question,
    totalCount: state.questions.totalCount,
    correctCount: state.questions.correctCount,
    charsInProposition: state.questions.charsInProposition,
    charsOnBoard: state.questions.charsOnBoard,
    answerCondition: state.questions.checkAnswerCondition,
    score: state.questions.score,
    showError: state.questions.showError
  }
}

export default connect(
  mapStateToProps,
  {
    fetchQuestion,
    removeQuestion,
    incrementTotalCount,
    incrementCorrectCount,
    relocateToBoard,
    relocateToProposition,
    checkAnswer,
    changeScore,
    hideError
  }
)(MainPage)

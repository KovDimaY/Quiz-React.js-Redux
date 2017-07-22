// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestion } from '../actions/questions';

// Components import
import ActivityLog from './main/activity-log.js'
import QuestionInfo from './main/question-info.js'
import Loader from './main/loader.js'

// Main page
class MainPage extends Component {
  componentWillMount() {
    this.props.fetchQuestion();
  }

  render() {
    console.log(`this is transformed state: `, this.props.question);
    return (
      <div className='container'>
        <div className='main-page'>
          <ActivityLog />
          {this.props.question ? (
              <QuestionInfo
                question={this.props.question}/>
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
    question: state.questions.question
  }
}

export default connect(mapStateToProps, { fetchQuestion })(MainPage)

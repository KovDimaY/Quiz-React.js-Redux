// Node modules import
import React, { Component } from 'react';

// This component will show question to the user
export default class QuestionInfo extends Component {
  render() {
    const {
      id,
      question,
      category
    } = this.props.question
    return (
      <div className='question-info'>
        <h1 className="title">Question #{id}</h1>
        <h2 className="category">Category: {category.title}</h2>
        <p className="description">{question}</p>
      </div>
    )
  }
}

// Node modules import
import React, { Component } from 'react';

// This component will show question to the user (+ id, category and value)
export default class QuestionInfo extends Component {
  render() {
    const {
      id,
      question,
      category,
      value
    } = this.props.question
    return (
      <div className='question-info'>
        <h2 className="title">Question #{id}</h2>
        <h5 className="category">Category: {category.title}</h5>
        <h3 className="value" title="Value of the question">{value}</h3>
        <p className="description">{question}</p>
      </div>
    )
  }
}

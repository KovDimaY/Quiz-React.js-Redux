// Node modules import
import React, { Component } from 'react';

// This component will show question to the user
export default class QuestionInfo extends Component {
  render() {
    const {
      id,
      question,
      category,
      value
    } = this.props.question
    console.log(this.props)
    return (
      <div className='question-info'>
        <h1 className="title">Question #{id}</h1>
        <h4 className="category">Category: {category.title}</h4>
        <h2 className="value">Value: {value}</h2>
        <p className="description">{question}</p>
      </div>
    )
  }
}

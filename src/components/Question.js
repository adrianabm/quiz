import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const question = this.props.question
    const handleAnswer = this.props.handleAnswer

    let answers = question.answers.map((answer) => {
      return (
        <li
          key={ answer.answer }
          onClick={this.props.handleAnswer.bind(this, answer)}>
            { answer.answer }, { answer.points }
        </li>
      )
    })

    return (
      <div>
        <h3>{ question.question }</h3>
        <ul>{ answers }</ul>
      </div>
    )
  }
}

export default Question

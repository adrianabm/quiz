import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/fetch_questions'

class Quiz extends Component {
  componentWillMount() {
    this.props.fetchQuestions()
  }

  render() {
    const questions = this.props.questions

    if (questions.length <= 0) {
      return <div>Loading...</div>
    }

    return (
      <div className="quiz">
        <h3>Quiz</h3>
        <p>{ questions[0].question }</p>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps, { fetchQuestions })(Quiz)

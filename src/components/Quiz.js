import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/fetch_questions'

import Question from './Question'

class Quiz extends Component {
  componentWillMount() {
    this.props.fetchQuestions()
  }

  render() {
    const {questions, questionsAreLoaded, currentQuestion } = this.props.questions

    if ( !questionsAreLoaded ) {
      return <div>Loading...</div>
    }

    return (
      <div className="quiz">
        <h3>Quiz</h3>
        <Question
          question={ questions[currentQuestion] }
        />
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  console.log(questions)
  return { questions }
}

export default connect(mapStateToProps, { fetchQuestions })(Quiz)

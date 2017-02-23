import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchQuestions from '../actions/fetch_questions'
import previousQuestion from '../actions/previous_question'
import nextQuestion from '../actions/next_question'
import getPoints from '../actions/get_points'

import Question from './Question'
import Counter from './Counter'
import EndScreen from './EndScreen'

class Quiz extends Component {
  componentWillMount() {
    this.props.fetchQuestions()
  }

  handlePreviousQuestion() {
    const { currentQuestion } = this.props.questions
    this.props.previousQuestion(currentQuestion)
  }

  handleNextQuestion(answer) {
    const { currentQuestion } = this.props.questions
    this.props.nextQuestion(currentQuestion)
    this.props.getPoints(answer.points)
  }

  render() {
    const {questions, questionsAreLoaded, currentQuestion, totalScore, isComplete } = this.props.questions

    if ( !questionsAreLoaded ) {
      return <div>Loading...</div>
    } else if ( isComplete ) {
      return <EndScreen />
    }

    return (
      <div className="quiz">
        <h3>Quiz</h3>
        Score: { totalScore }
        <Counter
          counter={ currentQuestion + 1 }
          total={ questions.length }
        />

        <Question
          question={ questions[currentQuestion] }
          handleAnswer={ this.handleNextQuestion.bind(this) }
        />
        <button onClick={ this.handlePreviousQuestion.bind(this) }>Previous</button>
        {/* <button onClick={ this.handleNextQuestion.bind(this) }>Next</button> */}
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps, { fetchQuestions, previousQuestion, nextQuestion, getPoints })(Quiz)

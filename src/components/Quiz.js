import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchQuestions from '../actions/fetch_questions'
import previousQuestion from '../actions/previous_question'
import nextQuestion from '../actions/next_question'
import getPoints from '../actions/get_points'

import Question from './Question'
import Counter from './Counter'
import EndScreen from './EndScreen'
import ErrorScreen from './ErrorScreen'

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
    const {questions, isLoading, isComplete, hasError, currentQuestion, totalScore } = this.props.questions

    if (isLoading) {
      return <div>Loading...</div>
    } else if (isComplete) {
      return <EndScreen score = {totalScore} />
    } else if (hasError) {
      return <ErrorScreen />
    }

    return (
      <div className="panel">
        <div className="panel-header">
          <h3>What are your favorite things?</h3>
          <p>Check how many points you can earn with this awesome quiz!</p>
        </div>
        <div className="panel-body">
          <Counter
            counter={ currentQuestion + 1 }
            total={ questions.length }
          />

          <Question
            question={ questions[currentQuestion] }
            handleAnswer={ this.handleNextQuestion.bind(this) }
          />
          <button
            disabled={(currentQuestion === 0)}
            onClick={ this.handlePreviousQuestion.bind(this)}
            className="button">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps, { fetchQuestions, previousQuestion, nextQuestion, getPoints })(Quiz)

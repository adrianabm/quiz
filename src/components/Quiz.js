import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchQuestions from '../actions/fetch_questions'
import previousQuestion from '../actions/previous_question'
import nextQuestion from '../actions/next_question'

import Question from './Question'
import Counter from './Counter';

class Quiz extends Component {
  componentWillMount() {
    this.props.fetchQuestions()
  }

  handlePreviousQuestion() {
    const { currentQuestion } = this.props.questions
    this.props.previousQuestion(currentQuestion)
  }

  handleNextQuestion() {
    const { currentQuestion } = this.props.questions
    this.props.nextQuestion(currentQuestion)
  }

  render() {
    const {questions, questionsAreLoaded, currentQuestion } = this.props.questions

    if ( !questionsAreLoaded ) {
      return <div>Loading...</div>
    }

    return (
      <div className="quiz">
        <h3>Quiz</h3>
        <Counter
          counter={ currentQuestion + 1 }
          total={ questions.length }
        />
        
        <Question
          question={ questions[currentQuestion] }
        />
        <button onClick={ this.handlePreviousQuestion.bind(this) }>Previous</button>
        <button onClick={ this.handleNextQuestion.bind(this) }>Next</button>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps, { fetchQuestions, previousQuestion, nextQuestion })(Quiz)

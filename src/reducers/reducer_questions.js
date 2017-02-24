import { FETCH_QUESTIONS, CATCH_ERRORS } from '../actions/fetch_questions'
import { NEXT_QUESTION } from '../actions/next_question'
import { PREVIOUS_QUESTION } from '../actions/previous_question'
import { GET_POINTS } from '../actions/get_points'

const defaultState = {
  currentQuestion: 0,
  questions: [],
  isLoading: true,
  totalScore: 0,
  isComplete: false,
  hasError: false
}

export default function(state = defaultState, action ) {
  switch (action.type) {
    case FETCH_QUESTIONS:
    console.log('hi')
      return Object.assign({}, state, {
        questions: action.payload.data,
        isLoading: false
      }
    )

    case CATCH_ERRORS:
    console.log('hi')
      return Object.assign({}, state, {
        isLoading: false,
        hasError: true
      }
    )

    case NEXT_QUESTION:
    let nextQuestion = state.currentQuestion + 1
    let complete = false
    if(nextQuestion >= state.questions.length) {
      complete = true,
      nextQuestion = 0
    }
      return Object.assign({}, state, {
        currentQuestion: nextQuestion,
        isComplete: complete
      }
    )

    case PREVIOUS_QUESTION:
    let previousQuestion = state.currentQuestion - 1
    if(previousQuestion < 0 ) {
      previousQuestion = state.questions.length - 1
    }
      return Object.assign({}, state, {
        currentQuestion: previousQuestion,
      }
    )

    case GET_POINTS:
      return Object.assign({}, state, {
        totalScore: state.totalScore + action.payload
      }
    )
  }

  return state
}

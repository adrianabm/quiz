import { SET_CURRENT_USER } from '../actions/set_current_user'
import { FETCH_QUESTIONS, CATCH_ERRORS } from '../actions/fetch_questions'
import { NEXT_QUESTION } from '../actions/next_question'
import { PREVIOUS_QUESTION } from '../actions/previous_question'
import { GET_POINTS } from '../actions/get_points'

const defaultState = {
  currentUser: 'Unknown',
  currentQuestion: 0,
  questions: [],
  isLoading: true,
  userAnswers: [],
  isComplete: false,
  hasError: false
}

export default function(state = defaultState, action ) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.payload.name
      }
    )

    case FETCH_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload.data,
        isLoading: false
      }
    )

    case CATCH_ERRORS:
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
      // In case the person returns to the previous question and answer it again,
      // the answer will be replaced by the new answer
      let existingAnswer = state.userAnswers.find(t => t.questionId === action.payload.questionId)
      if (existingAnswer === undefined) {
        return Object.assign({}, state, {
          userAnswers: [ ...state.userAnswers, action.payload ]
        })
      } else {
        let newAnswers = state.userAnswers.map((answer) => {
          if (answer.questionId === action.payload.questionId) {
            return Object.assign({}, answer, {
              points: action.payload.points,
              answer: action.payload.answer
            })
          }
          return answer
        })
        return Object.assign({}, state, {
          userAnswers: newAnswers
        })
      }
  }
  return state
}

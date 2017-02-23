import { FETCH_QUESTIONS } from '../actions/fetch_questions'

const defaultState = {
  currentQuestion: 0,
  questions: [],
  questionsAreLoaded: false,
  IsComplete: false
}

export default function(state = defaultState, action ) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload.data,
        questionsAreLoaded: true
      })
    }
  return state
}

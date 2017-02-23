import { FETCH_QUESTIONS } from '../actions/fetch_questions'

export default function(state = [], action ) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload.data
    }
  return state
}

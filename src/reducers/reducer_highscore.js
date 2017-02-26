import { GET_HIGHSCORE, CATCH_ERRORS } from '../actions/get_highscore'

const defaultState = {
  highscore: [],
  isLoading: true,
  hasError: false
}

export default function(state = defaultState, action ) {
  switch (action.type) {
    case GET_HIGHSCORE:
      return Object.assign({}, state, {
        highscore: action.payload.data,
        isLoading: false
      }
    )
    case CATCH_ERRORS:
      return Object.assign({}, state, {
        isLoading: false,
        hasError: true
      }
    )
  }
  return state
}

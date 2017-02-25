import { GET_HIGHSCORE } from '../actions/get_highscore'

const defaultState = {
  highscore: [],
  isLoading: true
}

export default function(state = defaultState, action ) {
  switch (action.type) {
    case GET_HIGHSCORE:
      return Object.assign({}, state, {
        highscore: action.payload.data,
        isLoading: false
      }
    )
  }
  return state
}

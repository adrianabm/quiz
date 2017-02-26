import axios from 'axios'

export const GET_HIGHSCORE = 'GET_HIGHSCORE'
export const CATCH_ERRORS = 'CATCH_ERRORS'

const API_URL = 'http://localhost:3000'

export default () => {
  return function(dispatch) {
    axios.get(`${API_URL}/users?_sort=score&_order=DESC&_start=0&_limit=10`)
      .then( response => {
        dispatch({ type: GET_HIGHSCORE, payload: response })
      })
      .catch(() => {
        dispatch({ type: CATCH_ERRORS })
      }
    )
  }
}

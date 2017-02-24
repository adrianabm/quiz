import axios from 'axios'

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const CATCH_ERRORS = 'CATCH_ERRORS'

const API_URL = 'http://localhost:3000'

export default () => {
  return function(dispatch) {
  axios.get(`${API_URL}/questions`)
    .then( response => {
      dispatch({ type: FETCH_QUESTIONS, payload: response })
    })
    .catch(() => {
      dispatch({ type: CATCH_ERRORS })
      console.log('error')
    })
  }
}

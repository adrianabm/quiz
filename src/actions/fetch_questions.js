import axios from 'axios'

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'

const API_URL = 'http://localhost:3000'

export default () => {
  return function(dispatch) {
  axios.get(`${API_URL}/questions`)
    .then( response => {
      dispatch({ type: FETCH_QUESTIONS, payload: response })
    })
    .catch(() => {
      console.log('error')
    })
  }
}

import axios from 'axios'

export const SAVE_SCORE =  'SAVE_SCORE'

const API_URL = 'http://localhost:3000'

export default (user) => {
  const request = axios.post(`${API_URL}/users`, user)
  console.log(user)
  return {
    type: SAVE_SCORE,
    payload: request
  }
}

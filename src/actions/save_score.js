import axios from 'axios'

import getHighScore from './get_highscore'

export const SAVE_SCORE =  'SAVE_SCORE'

const API_URL = 'http://localhost:3000'

export default (user) => {
  let userToSave = {
    name: user.currentUser,
    score: user.score
  }
  return function(dispatch){
    axios.post(`${API_URL}/users`, userToSave)
      .then( response => {
        dispatch({ type: SAVE_SCORE, payload: response })
        dispatch(getHighScore())
      })
  }
}

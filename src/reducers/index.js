import { combineReducers } from 'redux'
import QuestionsReducer from './reducer_questions'
import HighScoreReducer from './reducer_highscore'

const rootReducer = combineReducers({
  questions: QuestionsReducer,
  highscore: HighScoreReducer
})

export default rootReducer

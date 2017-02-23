import axios from 'axios'

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'

const API_URL = 'http://localhost:3000/questions'

export function fetchQuestions() {
  const request = axios.get(`${API_URL}`)

  return {
    type: FETCH_QUESTIONS,
    payload: request
  }
}

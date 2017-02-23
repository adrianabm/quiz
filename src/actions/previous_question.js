export const PREVIOUS_QUESTION =  'PREVIOUS_QUESTION'

export default (currentQuestion) => {
  return {
    type: PREVIOUS_QUESTION,
    payload: currentQuestion
  }
}

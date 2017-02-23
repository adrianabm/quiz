export const NEXT_QUESTION =  'NEXT_QUESTION'

export default (currentQuestion) => {
  return {
    type: NEXT_QUESTION,
    payload: currentQuestion
  }
}

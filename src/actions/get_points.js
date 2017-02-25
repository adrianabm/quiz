export const GET_POINTS =  'GET_POINTS'

export default (answer) => {
  return {
    type: GET_POINTS,
    payload: answer
  }
}

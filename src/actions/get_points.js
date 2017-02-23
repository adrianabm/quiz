export const GET_POINTS =  'GET_POINTS'

export default (points) => {
  return {
    type: GET_POINTS,
    payload: points
  }
}

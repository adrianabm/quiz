export const SET_CURRENT_USER =  'SET_CURRENT_USER'

export default (userName) => {
  return {
    type: SET_CURRENT_USER,
    payload: userName
  }
}

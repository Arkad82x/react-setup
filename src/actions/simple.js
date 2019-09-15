export const simple = () => dispatch => {
 dispatch({
  type: 'SIMPLE',
   payload: {
    running: "Yes!"
   }
 })
}

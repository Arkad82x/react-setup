const initialState = {
  running: "Nope"
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "SIMPLE": return {...state, running: action.payload.running}
    default:
      return state
  }
}


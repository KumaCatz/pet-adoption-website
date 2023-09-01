export const userDataReducerActions = {
  COMPARE_USERNAME: 'COMPARE_USERNAME',
  COMPARE_PASSWORD: 'COMPARE_PASSWORD',
  SORT_BY_DATE: 'SORT_BY_DATE',
}

export  function userDataReducer(state, action) {
  switch (action.type) {
    case userDataReducerActions.COMPARE_USERNAME:
      return [action.data, ...state]
    case userDataReducerActions.COMPARE_PASSWORD:
      return state.filter((item) => item !== action.data)
    case userDataReducerActions.SORT_BY_DATE:
      return state.sort((a, b) => a.date - b.date)
    default:
      throw new Error()
  }
}

//change ofc this is paste copy from the blog project
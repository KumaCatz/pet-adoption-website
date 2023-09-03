export const userDataReducerActions = {
  LOGIN: 'LOGIN',
  COMPARE_PASSWORD: 'COMPARE_PASSWORD',
  SORT_BY_DATE: 'SORT_BY_DATE',
}

export const userDataReducer = (state, action) => {
  switch (action.type) {
    case userDataReducerActions.LOGIN:
      return {
        ...state,
        'username': action.username,
        'password': action.password,
      }
    case userDataReducerActions.COMPARE_PASSWORD:
      return console.log('hello reducer :)')
    case userDataReducerActions.SORT_BY_DATE:
      return console.log('hello reducer :)')
    default:
      throw new Error()
  }
}

//change ofc this is paste copy from the blog project
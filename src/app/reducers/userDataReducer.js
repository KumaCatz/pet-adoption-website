export const userDataReducerActions = {
  LOGIN: 'LOGIN',
  REGISTER_NEW: 'REGISTER_NEW',
  SORT_BY_DATE: 'SORT_BY_DATE',
  UPDATE_KEY_VALUE: "UPDATE_KEY_VALUE"
}

export const initUserData = {
  email: "",
  password: ""
}

export const userDataReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case userDataReducerActions.UPDATE_KEY_VALUE:
      return {
        ...state,
        [payload.key]: payload.value
      }
    case userDataReducerActions.LOGIN:
      return {
        ...payload.user,
      }
    case userDataReducerActions.REGISTER_NEW:
      return {
        id: payload.id,
        ...payload.body,
      }
    case userDataReducerActions.SORT_BY_DATE:
      return console.log('hello reducer :)')
    default:
      throw new Error()
  }
}

//change ofc this is paste copy from the blog project
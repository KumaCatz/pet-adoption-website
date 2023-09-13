export const userDataReducerActions = {
  LOGIN: 'LOGIN',
  REGISTER_NEW: 'REGISTER_NEW',
  SORT_BY_DATE: 'SORT_BY_DATE',
}

export const userDataReducer = (state, action) => {
  const { type, payload, user, newUser } = action

  switch (type) {
    case userDataReducerActions.LOGIN:
      return {
        ...user,
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
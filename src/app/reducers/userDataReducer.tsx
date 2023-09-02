export enum userDataReducerActions {
  COMPARE_USERNAME = 'COMPARE_USERNAME',
}

interface userDataReducerAction {
  type: userDataReducerActions;
}

interface userDataReducerState {
  user: object;
}

export function userDataReducer(state: userDataReducerState, action: userDataReducerAction) {
  switch (action.type) {
    case userDataReducerActions.COMPARE_USERNAME:
      return console.log('hello reducer :)')
    default:
      throw new Error()
  }
}

//change ofc this is paste copy from the blog project
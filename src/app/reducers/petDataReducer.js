export const petDataReducerActions = {
  REGISTER_NEW: 'REGISTER_NEW',
  UPDATE_KEY_VALUE: "UPDATE_KEY_VALUE"
}

export const initPetData = {
}

export const petDataReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case petDataReducerActions.UPDATE_KEY_VALUE:
      return {
        ...state,
        [payload.key]: payload.value
      }
    case petDataReducerActions.REGISTER_NEW:
      return {
        id: payload.id,
        ...payload.body,
      }
    default:
      throw new Error()
  }
}
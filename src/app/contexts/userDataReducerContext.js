import React from "react";

const userDataReducerContext = React.createContext({
  userData: {},
  dispatchUserData: () => {},
})

export default userDataReducerContext
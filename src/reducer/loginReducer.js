

let initialState = {
    loggedIn:false,
    email:null
    
};

export const loginReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "SET_USER":
      return {state,...action.payload}
    case "RESET_USER":
      return{state,email:null,loggedIn:false}

    
    default:
      return state;
  }
};

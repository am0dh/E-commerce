let initialstate = {
  orders: [],
};
export const ordersReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_USER_ORDERS":
      return { orders: [...action.payload] };
    default:
      return { ...state };
  }
};

export const loginChecker = (email, password) => async (dispatch) => {
  const credentials = await fetch("http://localhost:3000/userInfo");
  const credArr = await credentials.json();

  let logger = false;

  credArr.map((item) => {
    if (item.email === email && item.password === password) {
      logger = true;
      dispatch({
        type: "ADD_USER_INFO",
        payload: { userDetails: email, isLoggedIn: logger },
      });
    }
  });
};

export const fetchUserOrders = (email) => async (dispatch) => {
  const data = await fetch(`http://localhost:3000/${email}`);
  const dataObj = await data.json();
  let cart = [...dataObj.cart];
  let orders = [...dataObj.orders];

  dispatch({
    type: "FETCH_PRODUCTS_FROM_USER_CART",
    payload: cart,
  });
};

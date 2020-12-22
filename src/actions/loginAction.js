export const loginAuthenticate = (email, password) => async (dispatch) => {
  const authData = JSON.stringify({
    email: email,
    password: password,
  });
  const reqOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: authData,
  };
  const auth = await fetch("http://localhost:3000/login", reqOptions);
  const responseToken = await auth.json();

  if (auth.ok) {
    localStorage.setItem("user", JSON.stringify(responseToken));
    dispatch({
      type: "SET_USER",
      payload: { email, password, responseToken, loggedIn: true },
    });

    const userCart = await fetch(`http://localhost:3000/${email}.cart`);
    const cartJson = await userCart.json();
    dispatch({
      type: "FETCH_PRODUCTS_FROM_USER_CART",
      payload: cartJson,
    });

    const userOrders = await fetch(`http://localhost:3000/${email}.orders`);
    const ordersJson = await userOrders.json();
    console.log(ordersJson);
    dispatch({
      type: "SET_USER_ORDERS",
      payload: ordersJson,
    });
  } else {
    alert("Wrong email or password");
  }
};


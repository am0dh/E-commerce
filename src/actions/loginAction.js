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
    console.log(cartJson);
    dispatch({
      type: "FETCH_PRODUCTS_FROM_USER_CART",
      payload: cartJson,
    });
  } else {
    alert("Wrong email or password");
    dispatch({
      type: "SET_LOGIN_ERROR",
      payload: responseToken,
    });
  }
};

export const resetUser = () => async (dispatch) => {
  dispatch({
    type: "RESET_USER",
  });
};

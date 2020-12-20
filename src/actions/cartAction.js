export const addToCart = (data) => async (dispatch) => {
  const cartProduct = { product: data, quantity: 1, price: data.price };

  dispatch({
    type: "ADD_PRODUCT_TO_CART",
    payload: cartProduct,
  });
};

export const deleteProdCart = (index) => async (dispatch) => {
  dispatch({
    type: "DELETE_PRODUCT_FROM_CART",
    payload: index,
  });
};

export const emptyCart = () => async (dispatch) => {
  dispatch({
    type: "EMPTY_CART",
  });
};

export const handleCartQuantity = (str, index) => async (dispatch) => {
  dispatch({
    type: "HANDLE_QUANTITY",
    payload: { str: str, index: index },
  });
};

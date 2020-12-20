/* eslint-disable no-extend-native */
let initialState = {
  cartProducts: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      let prodCartArr = [...state.cartProducts];
      if (prodCartArr.length === 0) {
        prodCartArr.push(action.payload);
      } else {
        let variable = prodCartArr.some(
          (item) => item.product.id === action.payload.product.id
        );
        if (!variable) {
          prodCartArr.push(action.payload);
        }
      }
      return { ...state, cartProducts: [...prodCartArr] };

    case "FETCH_PRODUCTS_FROM_USER_CART":
      //below code for Array.prototypr.unique() is picked from stackoverflow
      //https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
      Array.prototype.unique = function () {
        var a = this.concat();
        for (var i = 0; i < a.length; ++i) {
          for (var j = i + 1; j < a.length; ++j) {
            if (a[i].product.id === a[j].product.id) a.splice(j--, 1);
          }
        }
        return a;
      };
      //statckoverflow code ends
      let userCart = [...action.payload];
      let stateCart = [...state.cartProducts];
      let filteredArr = userCart.concat(stateCart).unique();
      return {
        ...state,
        cartProducts: [...filteredArr],
      };

    case "DELETE_PRODUCT_FROM_CART":
      let cartArr = [...state.cartProducts];
      cartArr = cartArr.filter((item, index) => {
        if (index !== action.payload) {
          return item;
        }
      });
      return { ...state, cartProducts: [...cartArr] };

    case "EMPTY_CART":
      return { state, cartProducts: [] };

    case "HANDLE_QUANTITY":
      let cartProd = [...state.cartProducts];

      if (action.payload.str === "increase") {
        cartProd[action.payload.index].quantity =
          parseInt(cartProd[action.payload.index].quantity) + 1;
        cartProd[action.payload.index].price =
          cartProd[action.payload.index].quantity *
          cartProd[action.payload.index].product.price;
      }
      if (action.payload.str === "decrease") {
        cartProd[action.payload.index].quantity -= 1;
        cartProd[action.payload.index].price =
          cartProd[action.payload.index].quantity *
          cartProd[action.payload.index].product.price;
      }
      if (cartProd[action.payload.index].quantity === 0) {
        cartProd = cartProd.filter((item, index) => {
          if (index !== action.payload.index) {
            return item;
          }
        });
      }
      return { ...state, cartProducts: [...cartProd] };

    default:
      return state;
  }
};

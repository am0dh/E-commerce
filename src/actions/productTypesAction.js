import {FETCH_PROD_TYPES,FETCH_SPECIFIC_TYPE} from '../types'

//

export const fetchProductTypes = () => async (dispatch) => {
  const res = await fetch("http://localhost:3000/productType");
  const data =await res.json()
  console.log(data)
  dispatch({
    type: FETCH_PROD_TYPES,
    payload: data,
  });
};

export const fetchProductsByType=(item)=> async (dispatch) => {
  const res = await fetch(`http://localhost:3000/${item}`);
  const data =await res.json()
  console.log(data)
  dispatch({
    type: FETCH_SPECIFIC_TYPE,
    payload: data,
  });
};

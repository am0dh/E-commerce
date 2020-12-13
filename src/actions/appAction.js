export const fetchProductsData = (
  typeFiltering,
  brandFiltering,
  priceHigh,
  priceLow,
  pageNumber
) => async (dispatch) => {
  let urlForProducts = `http://localhost:3000/allProducts?_page=${pageNumber}&_limit=8&`;

  if (typeFiltering.length != 0) {
    urlForProducts += `&type=${typeFiltering}&`;
  }
  if (brandFiltering.length != 0) {
    urlForProducts += `&brand=${brandFiltering}&`;
  }
  if (priceLow != NaN && priceHigh != NaN) {
    urlForProducts += `&price_gte=${priceLow}&price_lte=${priceHigh}`;
  } else if (
    (typeFiltering === "" || typeFiltering === undefined) &&
    (brandFiltering === undefined || brandFiltering === "") &&
    priceLow === 0 &&
    priceHigh === 1
  ) {
    urlForProducts = `http://localhost:3000/allProducts?_page=${pageNumber}&_limit=8&`;
  }

  const allProducts = await fetch(urlForProducts);
  const allProductsData = await allProducts.json();
  const productType = await fetch(`http://localhost:3000/productType`);
  const productTypeData = await productType.json();
  const brands = await fetch("http://localhost:3000/brands");
  const brandsData = await brands.json();
  

  const data = {
    products: [...allProductsData],
    productType: [...productTypeData],
    brands: [...brandsData],
    totalProductsDisplayed: allProducts.length
  };
  dispatch({
    type: "FETCH_PRODUCTS_DATA",
    payload: data,
  });
};

export const setFilteringState = (data) => async (dispatch) => {
  dispatch({
    type: "SET_FILTERING_DATA",
    payload: data,
  });
};

export const setSearchState = (data) => async (dispatch) => {
  dispatch({
    type: "SET_SEARCH_DATA",
    payload: data,
  });
};

export const resetFiltering = (data) => async (dispatch) => {
  dispatch({
    type: "RESET_FILTER",
    data: data,
  });
};

export const setSelectedPage = (data) => async (dispatch) => {
 
  dispatch({
    type: 'SET_PAGE_NUMBER',
    payload: data,
  });
};

export const resetPageNumber=()=> async (dispatch)=>{

  dispatch({
    type:'SET_PAGE_NUMBER',
    payload:1
  })
}
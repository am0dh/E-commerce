let initialState = {
  products: [],
  productType: [],
  brands: [],
  brandFiltering: "",
  typeFiltering: "",
  priceLow: 1,
  priceHigh: 9999,
  searchBar: "",
  productPerPage: 5,
  pageNumber: 1,
  totalProducts:10
};

export const appReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_DATA":
      return {
        ...state,
        products: [...action.payload.products],
        brands: [...action.payload.brands],
        productType: [...action.payload.productType],
      };

    case "SET_FILTERING_DATA":
      return { ...state, ...action.payload };

    case "SET_SEARCH_DATA":
      return { ...state, searchBar: action.payload };

    case "RESET_FILTER":
      return {
        ...state,
        typeFiltering: "",
        brandFiltering: "",
        priceLow: 1,
        priceHigh: 9999,
      };

    

    case "SET_PAGE_NUMBER":
       
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};

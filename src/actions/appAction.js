
export const fetchProductsData = () => async (dispatch) => {
    const allProducts = await fetch(`http://localhost:3000/allProducts`);
    const allProductsData = await allProducts.json();
    const productType = await fetch(`http://localhost:3000/productType`);
    const productTypeData = await productType.json();
    const brands=await fetch('http://localhost:3000/brands')
    const brandsData=await brands.json()
    
    const data={products:[...allProductsData],
                productType:[...productTypeData],
                brands:[...brandsData]}

    dispatch({
      type: 'FETCH_PRODUCTS_DATA',
      payload: data,
    });
  };


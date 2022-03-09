export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_ARABIC_PRODUCTS_SUCCESS = "FETCH_ARABIC_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

const fetchArabicProductsSuccess = arabicProducts => ({
  type: FETCH_ARABIC_PRODUCTS_SUCCESS,
  payload: arabicProducts
});

// fetch products
export const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};

// fetch arabic products
export const fetchArabicProducts = arabicProducts => {
  return dispatch => {
    dispatch(fetchArabicProductsSuccess(arabicProducts));
  };
};
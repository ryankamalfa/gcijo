import productReducer from "./productReducer";
import arabicProductReducer from "./arabicProductReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import { combineReducers } from "redux";
import catalougeReducer from "./catalougeReducer";

const rootReducer = combineReducers({
  catalougeData: catalougeReducer,
  arabicCatalougeData: catalougeReducer,
  productData: productReducer,
  arabicProductData: arabicProductReducer,
  categoryData: categoryReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
});

export default rootReducer;

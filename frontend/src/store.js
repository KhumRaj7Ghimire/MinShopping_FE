import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Import Redux Dev Tools Extension
import { composeWithDevTools } from "redux-devtools-extension";

// Import Product Reducer
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

// Import Cart Reducers
import { cartReducer } from "./reducers/cartReducers";

// Combining Reducers
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// Initializing Initial State
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

// Initializing Middleware
const middleware = [thunk];

// Creating Store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

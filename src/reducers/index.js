import {combineReducers} from "redux";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import sellersReducer from "./sellersReducer";

export default combineReducers({
    products: productsReducer,
    sellers: sellersReducer,
    auth: authReducer
});
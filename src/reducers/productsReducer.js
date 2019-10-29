import _ from "lodash";
import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    FETCH_PRODUCT,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_BY_SELLER
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, ..._.mapKeys(action.payload, "id")};
        case FETCH_PRODUCT:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_PRODUCTS_BY_SELLER:
            return {...state, ..._.mapKeys(action.payload, "id")};
        case CREATE_PRODUCT:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_PRODUCT:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_PRODUCT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};
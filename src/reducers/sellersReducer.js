import _ from "lodash";
import {CREATE_SELLER, DELETE_SELLER, EDIT_SELLER, FETCH_SELLER, FETCH_SELLERS} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SELLERS:
            return {...state, ..._.mapKeys(action.payload, "id")};
        case FETCH_SELLER:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_SELLER:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_SELLER:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_SELLER:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};
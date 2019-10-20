import dataAccess from "../apis/dataAccess";
import _ from "lodash";
import {CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FETCH_PRODUCT, FETCH_PRODUCTS, SIGN_IN, SIGN_OUT} from "./types";
import history from "../history";

export const fetchProducts = () => async dispatch => {
  const response = await dataAccess.get("/products");
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = id => async dispatch => {
    const response = await dataAccess.get(`/products/${id}`);
    dispatch({
        type: FETCH_PRODUCT,
        payload: response.data
    });
};

export const createProduct = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await dataAccess.post("/products", { ...formValues, userId });
    dispatch({
        type: CREATE_PRODUCT,
        payload: response.data
    });
    history.push('/');
};

export const editProduct = (id, formValues) => async dispatch => {
    const response = await dataAccess.patch(`/products/${id}`, formValues);
    dispatch({
        type: EDIT_PRODUCT,
        payload: response.data
    });
    history.push('/');
};

export const deleteProduct = id => async dispatch => {
    await dataAccess.delete(`/products/${id}`);
    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    });
    history.push('/');
};

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
import dataAccess from "../apis/dataAccess";
import {
    CREATE_PRODUCT,
    CREATE_SELLER,
    DELETE_PRODUCT,
    DELETE_SELLER,
    EDIT_PRODUCT,
    EDIT_SELLER,
    FETCH_PRODUCT,
    FETCH_PRODUCTS,
    FETCH_SELLER,
    FETCH_SELLERS,
    SIGN_IN,
    SIGN_OUT
} from "./types";
import history from "../history";

export const fetchProducts = () => async dispatch => {
    console.log(process.env);
    const response = await dataAccess.get("/products");
    console.log(response);
    console.log(response.data);
    dispatch({type: FETCH_PRODUCTS, payload: response.data});
};

export const fetchProduct = id => async dispatch => {
    const response = await dataAccess.get(`/products/${id}`);
    dispatch({
        type: FETCH_PRODUCT,
        payload: response.data
    });
};

export const createProduct = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await dataAccess.post("/products", {...formValues, userId});
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

export const fetchSellers = () => async dispatch => {
    const response = await dataAccess.get("/sellers");
    dispatch({type: FETCH_SELLERS, payload: response.data});
};

export const fetchSeller = id => async dispatch => {
    const response = await dataAccess.get(`/sellers/${id}`);
    dispatch({
        type: FETCH_SELLER,
        payload: response.data
    });
};

export const createSeller = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await dataAccess.post("/sellers", {...formValues, userId});
    dispatch({
        type: CREATE_SELLER,
        payload: response.data
    });
    history.push('/');
};

export const editSeller = (id, formValues) => async dispatch => {
    const response = await dataAccess.patch(`/sellers/${id}`, formValues);
    dispatch({
        type: EDIT_SELLER,
        payload: response.data
    });
    history.push('/');
};

export const deleteSeller = id => async dispatch => {
    await dataAccess.delete(`/sellers/${id}`);
    dispatch({
        type: DELETE_SELLER,
        payload: id
    });
    history.push('/');
};
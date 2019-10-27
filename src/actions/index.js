import {
    FETCH_PRODUCT_BEGIN,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    ADD_TO_CART,
    DELETE_FROM_CART,
    SUB_QUANTITY,
    ADD_QUANTITY
} from '../constants/ActionTypes.js'

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchItemsBegin());
        fetch('https://api.npoint.io/226f193cd969035500cc')
            .then(res => res.json())

            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchItemsSuccess(res.products));
                return res.products;
            })
            .catch(error => {
                dispatch(fetchItemsFailure(error));
            })
    }
}

export const fetchItemsBegin = () => ({
    type: FETCH_PRODUCT_BEGIN
})
export const fetchItemsSuccess = products => ({
    type: FETCH_PRODUCT_SUCCESS,
    products
})
export const fetchItemsFailure = error => ({
    type: FETCH_PRODUCT_FAILURE,
    error
})
export const addToCart = id => ({
    type: ADD_TO_CART,
    id
})
export const removeFromCart = id => ({
    type: DELETE_FROM_CART,
    id
})
export const addQuantity = id => ({
    type: ADD_QUANTITY,
    id
})
export const subtractQuantity = id => ({
    type: SUB_QUANTITY,
    id
})
import {
    FETCH_PRODUCT_BEGIN,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    ADD_TO_CART,
    DELETE_FROM_CART,
    SUB_QUANTITY,
    ADD_QUANTITY
}
    from '../constants/ActionTypes.js'

const initState = {
    items: [],
    loading: false,
    error: null,
    addedItems: [],
    total: 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_BEGIN:
            return {
                ...state,
                loading: true
            }

        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.products
            }

        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                items: []
            }

        case ADD_TO_CART:
            {
                let addedItem = state.items.find(item => item.id === action.id)
                let existedItem = state.addedItems.find(item => action.id === item.id)
                if (existedItem) {
                    addedItem.quantity += 1
                    return {
                        ...state,
                        total: state.total + addedItem.price
                    }
                }
                else {
                    addedItem.quantity = 1;
                    let newTotal = state.total + addedItem.price
                    return {
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total: newTotal
                    }

                }
            }

        case DELETE_FROM_CART:
            {
                let itemToDelete = state.addedItems.find(item => action.id === item.id)
                let newItems = state.addedItems.filter(item => action.id !== item.id)
                let newTotal = state.total - (itemToDelete.price * itemToDelete.quantity)
                return {
                    ...state,
                    addedItems: newItems,
                    total: newTotal
                }
            }

        case ADD_QUANTITY:
            {
                let addedItem = state.items.find(item => item.id === action.id)
                addedItem.quantity += 1
                let newTotal = state.total + addedItem.price
                return {
                    ...state,
                    total: newTotal
                }
            }

        case SUB_QUANTITY:
            {
                let addedItem = state.items.find(item => item.id === action.id)
                if (addedItem.quantity === 1) {
                    let newItems = state.addedItems.filter(item => item.id !== action.id)
                    let newTotal = state.total - addedItem.price
                    return {
                        ...state,
                        addedItems: newItems,
                        total: newTotal
                    }
                }
                else {
                    addedItem.quantity -= 1
                    let newTotal = state.total - addedItem.price
                    return {
                        ...state,
                        total: newTotal
                    }
                }
            }

        default:
            return state
    }

}

export default cartReducer
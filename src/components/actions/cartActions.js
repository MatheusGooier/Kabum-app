import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,FILTER_ITEMS,CLEAR_CART} from './action-types/cart-actions'


export const addToCart= (id, qtdAdd)=>{
    return{
        type: ADD_TO_CART,
        id,
        qtdAdd
    }
}

export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const filterItems=(id, title)=>{
    return{
        type: FILTER_ITEMS,
        id, 
        title
    }
}

export const ClearCart=()=>{
    return{
        type: CLEAR_CART
    }
}


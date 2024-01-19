import React from 'react'
import { ADD_TO_CART,REMOVE_TO_CART,CLEAR_CART } from './action'
const initialState={
    cart:[]
}

export const rootreducer=(state=initialState,action)=> {

switch(action.type){
case ADD_TO_CART:
    return{
        ...state,
        cart:[...state.cart,action.payload]
    }
case REMOVE_TO_CART:
    return{
...state,
cart:state.cart.filter((product)=>product.id !=action.payload)

    }

case CLEAR_CART:
    return{
        ...state,
        cart:[]

    }

}

}  
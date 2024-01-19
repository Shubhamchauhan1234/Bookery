import React from 'react'

import { useDispatch,useSelector } from 'react-redux'

import { ADD_TO_CART } from './action'

export default function Example() {
    const dispatch=useDispatch()
const cart=useSelector((state)=>state.cart)

function handelAddToCart(){
    const product={id:1,name:'product 1',price:20}
    dispatch(ADD_TO_CART)
    

}
  return (
    <>
    <div>Example</div>
    <button onClick={handelAddToCart}>ADD to Cart</button>
<h2>{cart.length}</h2>
    </>
  )
}

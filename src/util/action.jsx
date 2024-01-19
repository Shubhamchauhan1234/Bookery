

export var ADD_TO_CART='ADD_TO_CART'
export var REMOVE_TO_CART='REMOVE_TO_CART'
export var CLEAR_CART='CLEAR_CART'


ADD_TO_CART=(product)=>(

{
type:ADD_TO_CART,
payload:product,

}
)
 REMOVE_TO_CART=(productId)=>({

type:REMOVE_TO_CART,
payload:productId,



}

)
 CLEAR_CART=(product)=>({
type:CLEAR_CART,
payload:product


})
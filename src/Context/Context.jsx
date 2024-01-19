import {createContext, useContext, useReducer}from 'react'
import { cartReducer } from './Reducers';
const Cart =createContext();

const Context = ({childern}) => { 
    const products=
    [
  {
    id:1,
    url:'http://www.scrolldroll.com/wp-content/uploads/2021/01/great-indian-novel-books-by-indian-authors.jpg',
    price:435,
    name:'The Great Indian Novel',
    author: 'Shashi Tharoor',
    inCart:false,
    count:1
  
  }, 
  {
    id:2,
    url:'https://www.writersdigest.com/.image/t_share/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
    price:435,
    name:"Stephen King",
    author: 'Mr Mercedes and Finders Keeper',
    inCart:false,
    count:1
  },
  {
    id:3,
    url:'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974704552/demon-slayer-kimetsu-no-yaiba-vol-10-9781974704552_hr.jpg',
    price:435,
    name:'Demon Slayer',
    author: 'Koyoharu Gotouge',
    inCart:false,
    count:1
  },
  {
    id:4,
    url:'https://img.faballey.com/alleygal/images/postslide/2edf9f96-769c-47f3-8aec-c55d9fb693cc.jpg',
    price:435,
    name:'The God of Small things ',
    author:'Arundhati Roy',
    inCart:false,
    count:1
  },
  
  {
    id:5,
    url:'https://shereads.com/wp-content/uploads/2020/10/81of0IuGJaL-718x1024.jpg',
    price:435,
    name:'The Book of Lost Names',
    author:'Kristin Harmel',
    inCart:false,
    count:1
  },
  
  {
    id:6,
    url:'http://buzz.iloveindia.com/wp-content/uploads/2015/08/indian-books-14.jpg',
    price:435,
    name:'Tamas',
    author:'Bhisham Sahni',
    inCart:false,
    count:1
  },
  
  {
    id:7,
    url:'https://buzz.iloveindia.com/wp-content/uploads/2015/08/indian-books-4.jpg',
    price:435,
    name:'My Story',
    author:'Kamala Das',
    inCart:false,
    count:1
  },
  {
    id:8,
    url:'https://www.baystatebanner.com/wp-content/uploads/2020/03/Books-by-Black-Authors-3-e1585164909219.jpg',
    price:435,
    name:'The Black Book',
    author:'Mittleton A. Harris',
    inCart:false,
    count:1
  },
  {
    id:9,
    url:'https://i0.wp.com/www.maureenjohnsonbooks.com/wp-content/uploads/2018/02/mj_cover_3d_boyinthesmoke.png?fit=588%2C800&ssl=1',
    price:435,
    name:'The Boy in the Smoke',
    author:'Maureen Johnson',
    inCart:false,
    count:1
  },
  {
    id:10,
    url:'http://charles-martin.s3.amazonaws.com/250/martin_unwritten_hc__large.jpg',
    price:435,
    name:'Unwritten',
    author:'Charles Martin',
    inCart:false,
    count:1
  },
  {
    id:11,
    url:'https://n2.sdlcdn.com/imgs/g/5/0/Ram-Scion-of-Ikshvaku-An-SDL238428328-1-17561.jpeg',
    price:435,
    name:'Ram Scion of Ikshvaku',
    author:'Amish',
    inCart:false,
    count:1
  },
  
  {
    id:12,
    url:'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421561431/one-piece-vol-69-9781421561431_hr.jpg',
    price:435,
    name:'One Piece',
    author:'Eiichiro Oda',
    inCart:false,
    count:1
  },
    ]
const [state, dispatch] = useReducer(cartReducer,{
products:products,
cart:[]

} )

  return (
    
  <>
    <Cart.Provider value={{state,dispatch}}>

{childern}
    </Cart.Provider>
    </>)
};

export default Context;
export const CartState=()=>{
return useContext(Cart)

}
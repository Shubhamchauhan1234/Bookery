// import {useState,useEffect} from 'react'
// import axios from 'axios'
// export default function ProductList() {
//     const [product,setProduct]=useState([])
//     useEffect(()=>{
//     fetchData()
//     },[]
//     )
// const fetchData=async()=>{
//     try{
//         let res =await axios.get('https://api.escuelajs.co/api/v1/products')
//         setProduct(res.data)
//     }
//     catch(error){
//         console.error("error")
//     }
// }

//   return (
//     <>
//     <div>ProductList</div>
//     <ul>
//        {
//         product.map(product=>(
//             <li key={product.id}>
//                 <img src={product.images} alt={product.title} />
//             <p>{product.title}</p>
//             </li>
          
//             // <p key={product.id}>{product.title}</p>



//         ))

//        }

//     </ul>

//     </>
//   )
// }


import React,{useEffect, useState} from 'react'
import { getAuth ,onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth';
import { app } from '../component/Firebase';

const auth=getAuth(app)
export default function Signout() {
 const [user, setUser] = useState(null) ;
  useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
if(user){
  setUser(user);
  console.log('success');

}
else{
  console.log("log out");

  setUser(null);
}

})

  },[])
  if(user===null)
  {
    return(
      <>
      
      </>
    )
  }
 return (
    <>

    <button onClick={()=>signOut(auth)}>signOut</button>
   
    </>
  )
}

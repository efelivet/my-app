import {Link} from "react-router-dom";
import {userContext} from "./UserContext";
import {useContext,useEffect} from "react";


export default function Header() {
   const {userInfo,setUserInfo}  = useContext(userContext);
   
   useEffect(()=>{
      fetch('http://localhost:4000/profile',{
         headers: {'Content-Type':'application/json'},
         credentials:'include',
      }).then(response=>{
         response.json().then(userInfo=>{
            setUserInfo(userInfo.username)
         })
      })
   },[setUserInfo])


   const handleLogout = () =>{
          fetch('http://localhost:4000/logout',{
               credentials:'include',
               method:'POST'
            })
            setUserInfo(null);  


          
         }
        
     const username = userInfo?.username
return (
   
   <header >


    <Link to ="/" className ="Hom">Home</Link>
<nav>
   
  
      {username && (
         
      <div className ="float">
       
          <Link to ="/create" className ="create" >Create Post</Link>
          
       <input type="button" className ="out" onClick={handleLogout} 
       value="Logout" />
  
    </div>
     
       )}  
      {!username && (
      <>
            <Link to ="/registration" className="xw">Register</Link>
             <Link to ="/login" className ="xw" >Login</Link> 
         </>)}
           
    </nav>
   </header>
  
)

}


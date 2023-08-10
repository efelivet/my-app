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


    <Link to ="/">Home</Link>
<nav>
   
  
      {username && (
         
      <div className ="float">
       
          <Link to ="/create" className ="create" >CreatePost</Link>
          
       <input type="button" onClick={handleLogout} 
       value="Logout" />
  
    </div>
     
       )}  
      {!username && (
      <>
            <Link to ="/registration" className="Regist">Register</Link>
             <Link to ="/login" className ="logi" >Login</Link> 
         </>)}
           
    </nav>
   </header>
  
)

}


import {useState,useContext} from "react";
import {Navigate} from "react-router-dom";
import {userContext} from "./UserContext";

export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const[error,setError] = useState(false);
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(userContext);
  async function login(ev) {
    ev.preventDefault();

    if(username.length ===0 || password.length===0){
      setError(true);
     }
     
    
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
       response.json().then(userInfo=>{
        setUserInfo(userInfo);
        setRedirect(true);
       })
       
      }
     else {
      alert('invalid username and password');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div className="container">
       <h1>Login</h1>
    <form  onSubmit={login} >
    <div className="row">
        <div className="col-25">
        <label for="fname">username</label>
      </div>
      <div className="col-75">
      <input type="text" 
             placeholder="Your username.."
             value={username}
             id="fname" name="username" 
             onChange={ev => setUsername(ev.target.value)}/>
             
           {error && username.length<=0?
           <label ><p className ="label">username is required</p></label>:""}   
             
              </div>
      </div> 

      <div className="row">

      <div className="col-25">
        <label for="lname">password</label>
      </div>


      <div className="col-75">
      <input type="password"
             placeholder="Your last password.."
             value={password}
             id="lname" name="lastname"
             onChange={ev => setPassword(ev.target.value)}/>
            
             {error && password.length<=0?
           <label ><p className ="label" >password is required</p></label>:""}  
             
         </div>
      
       </div>
               <br/>
   <div className="row">
      <input type="submit" value="Submit"/>
    </div>

    </form>
    </div>
  );
}
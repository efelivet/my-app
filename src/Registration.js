import {useState} from "react";

export default function Registration(ev) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[error,setError] = useState(false);
  async function register(ev) {
    ev.preventDefault();
   if(username.length ===0 || password.length===0){
    setError(true);
   }
   
  
    const response = await fetch('http://localhost:4000/registration', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
   
    if(response.status ===200){
      alert("registration successful")
    }
    else{
      alert("try again");
    }
   
  }
  return (
    <>
   <div className="container">
   <h1>Register</h1>
    <form  onSubmit={register} >
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
</>
  );
}

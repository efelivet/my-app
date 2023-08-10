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
      alert("registration failed");
    }
   
  }
  return (
   <div className ="register">
    <form  onSubmit={register} >
       
      <h1>Register</h1><br/>
      <input type="text" className ="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
              <br/>
           {error && username.length<=0?
           <label ><p className ="label">Fill in all fields</p></label>:""}   
              <br/>
      <input type="password" className ="text"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
             <br/>
             {error && password.length<=0?
           <label ><p className ="label" >Fill in all fields</p></label>:""}  
              <br/>
      <button>Register</button>
    </form>
    </div>
  );
}

import {useState} from "react";

export default function CreatePost(){

  const[title,setTitle] = useState(" ");
  const[description,setDescription] = useState(" ");
  const[file,setFile] = useState(" ");

  const handlesubmit  =(e)=>{
    e.preventDefault();
    const data = new FormData()
    data.set('title',title);
    data.set('description',description);
    data.set('file',file);

   
    fetch('http://localhost:4000/create',{
      method:'POST',
      body:data,
    }).then(response=>{response.json().then(result=>{if(result==="success"){
      window.location.href = "/";
    }})})
  } 
return(
  <div className ="createpost">
     <form onSubmit ={handlesubmit} >
    <label for ="title">Title</label><br/>
 <input type ="text" placeholder ="Title" value ={title} 
 
 onChange ={(e)=>{setTitle(e.target.value)}}/>
 <br/><br/>
  <label for ="title">Description</label><br/>  
<input type ="text" placeholder ="enter description" value ={description} 
onChange ={(e)=>{setDescription(e.target.value)}}/>
<br/><br/>
<input type ="file" className ="file" onChange ={(e)=>{setFile(e.target.files[0])}}/>
<br/>
<button>Post</button>
     </form>
     </div>
)
}
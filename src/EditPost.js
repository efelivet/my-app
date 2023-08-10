import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
export default function EditPost(){

  const[title,setTitle] = useState(" ");
  const[description,setDescription] = useState(" ");

const {id} = useParams();
  const handlesubmit  =(e)=>{
    e.preventDefault();
   
   
   
    fetch(`http://localhost:4000/editpost/${id}`,{
      method:'PUT',
      body: JSON.stringify({title,description}),
      headers: {'Content-Type':'application/json'},
    }).then(response=>{response.json().then(result=>{if(result==="success"){
      window.location.href = "/";
    }})})


  }

  useEffect(()=>{
     fetch(`http://localhost:4000/getpostbyid/${id}`).then(
        response=>{response.json().then(result=>{
            setTitle(result.title);
            setDescription(result.description);
        })})
},
    
    [id])


return(
     <form onSubmit ={handlesubmit}>
  <h3>Update Post </h3>
<input type ="text" value ={title} onChange ={(e)=>{setTitle(e.target.value)}}/>
<textarea   value ={description}
 name ="desc"
 id ="desc"
 cols ="30"
 rows ="10"
 placeholder ="enter description" onChange ={(e)=>{setDescription(e.target.value)}}>

</textarea>

<button>update</button>
     </form>
)
}
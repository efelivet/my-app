import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Link} from "react-router-dom";
export default function Post(){
const{id} = useParams();

 const [post,setPost] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:4000/getpostbyid/${id}`).then(
            res=>{res.json().then(post=>{setPost(post)})})
        
        },  [id])
    
        
      
      const handleDelete =(id)=>{
        fetch(`http://localhost:4000/deletepost/${id}`,{
          method:'DELETE',

        }).then(response=>{response.json().then(result=>{if(result==="success"){
          window.location.href = "/";
        }})})
      }  

    return(
        <div className ="post_container"> 
        

        <div className ="post_post"> 
        <img src ={`http://localhost:4000/Images/${post.file}`} alt =""/>
         <h1>{post.title}</h1> 
          <p>{post.description}</p>

          </div>
          <div>
        
        <Link to ={`/editpost/${post._id}`}>Edit </Link>

        <button onClick ={e=>handleDelete(post._id)}>Delete</button>
        
         
        </div>

          </div>
         
    )
    
}
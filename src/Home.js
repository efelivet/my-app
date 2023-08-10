 import {useState} from "react";
 import {useEffect} from "react";
 import {Link} from "react-router-dom";
 
 const Home = ()=>{
  const[posts,setPosts] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/getposts').then(
      res=>{res.json().then(posts=>{setPosts(posts)})})
  
      },[])
 return(

        <>
       <div className ="large">
        <h1 className="large_a">Blog</h1>
       
       </div>

     <div clasName ="posts_container">


      {
        posts.map(post=>(
    
<Link to ={`/post/${post._id}`}>
        <div className ="post"> 
      
        <img src ={`http://localhost:4000/Images/${post.file}`} alt =""/>
    
        <div className ="post_text"> 
         
       <h3>{post.title}</h3> 
       
          <p>{post.description}</p>
        </div>
          </div>
              </Link>     
                   ))
      }
        
        </div>
        </>
   ) 

      

}
export default Home;
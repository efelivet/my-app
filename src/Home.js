 import {useState} from "react";
 import {useEffect} from "react";
 import {Link} from "react-router-dom";
 import resize3 from './Images/resize3.jpg';
 
 const Home = ()=>{
  const[posts,setPosts] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/getposts').then(
      res=>{res.json().then(posts=>{setPosts(posts)})})
  
      },[])
 return(

        <>


<div className="header">
  <h2>Richie Blog</h2>
</div>

<div className="row">
  <div className="leftcolumn">
    <div className="card">
      <h2>Binance Charity Tech Scholarship</h2><br/>
      <h5>Tech training scholarship to over 1000 
        youth across African, Aug 11, 2023</h5><br/>
     
<p>Binance partnered with Utiva to offer scholarship to 10,000 young African.
 over 20,000 young people across Africa that applied, 
  only 1,000 Africans where selected to participate in the 12-month
   fully funded scholarship program! 
   At utiva, you will be equipped with the requisite skills required 
   to start your career in Tech and you will also be introduced to
    the world of blockchain technology and crypto trading! 

</p>
      
    </div>
   
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>About Me</h2>
      <div className="fakeimg" ><img src ={resize3} alt=""/>
     <h3 style={{marginleft:5}}> I'm Richie a <br/>software developer</h3></div>
      <p>I am proficient in  Html, Css, Javascript and Node js and i am currently
        enrolled into utiva program,a world class leaing tech institution.
      </p>
    </div>

    <div className="card">
      <h3>Popular Post</h3><br/>
      <p>Log in to create and view blog post here...</p>
      <div clasName ="posts_container">
      {
        posts.map(post=>(
    
<Link to ={`/post/${post._id}`}>
        <div className ="post"> 
      
        <img src ={`http://localhost:4000/Images/${post.file}`} alt =""/>
    
        <div className ="post_text"> 
         
       <h3>{post.title}</h3> 
       
          <p style ={{fontfamily:'arial'}}>{post.description}</p>
        </div>
          </div>
        <button>Edit</button>
              </Link>
                 
                   ))
      }
        
        </div>
   
    </div>

    <div className="card">
      
      <p>follow me on twitter @EnobakhareEfe</p>
    </div>
  </div>
</div>




     

        </>
   ) 

      

}
export default Home;
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";


import Registration from "./Registration";
import LoginPage from "./LoginPage";
import NoPage from "./NoPage";
import CreatePost from "./CreatePost";
import {UserContextProvider} from "./UserContext";
import Post from "./Post";
import EditPost from "./EditPost";
import Home from "./Home"
function App() {

  return (
    <UserContextProvider>
     <BrowserRouter>
     <Header/>
              <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreatePost />} />
           <Route path="*" element={<NoPage />} />
           <Route path ="/post/:id" element ={<Post/>}/>
           <Route path ="/editpost/:id" element ={<EditPost/>} />
         
      </Routes> 
         </BrowserRouter>
    </UserContextProvider>
  
  );
}

export default App;

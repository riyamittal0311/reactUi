import React from "react";
import {Routes ,Route  } from 'react-router-dom'


import Dashboard from "./components/Dashboard";
import Header from "./components/header";
import Profile from "./components/profile";
import Article from "./components/article";
import Setting from "./components/setting";

import ProtectedRoutes from "./components/protectedRoutes";
import './index.scss'
import Login from "./components/profile/login";
import Signup from "./components/profile/signup";
const App=()=> {
  const token = JSON.parse(localStorage.getItem('token'))

  return ( 
    <>
    <Header/>


    <Routes>
        <Route  path='/'  exact element={<Dashboard />}/>
        <Route  path='/login'  exact element={<Login />}/>
        <Route  path='/signup'  exact element={<Signup />}/>

        <Route element={<ProtectedRoutes/>}>
        <Route  path='/article'  exact element={<Article />}/>
        <Route  path='/setting'  exact element={<Setting />}/>
        <Route path='/profile/:id' element={<Profile/>} />
        </Route>

        </Routes>
   
      


  </>
  );
}

export default App;

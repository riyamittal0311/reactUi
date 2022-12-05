import React,{useState , useEffect } from "react";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'


import classes from './style.module.scss'




const Header =()=>{

   const isLogin = useSelector(state=>state.userReducer.isLogin)
   const id = JSON.parse(localStorage.getItem('user'))?._id


        let headerLeft =[{
            name :'Home',
            icon:<i className="fa fa-home" aria-hidden="true"></i>,
            to:'/'
        },
        { name :'New Article' ,icon:<i className="fa fa-pencil-square-o" aria-hidden="true"></i> , to:'/article'},
        { name :'Settings' ,icon:<i className="fa fa-cog" aria-hidden="true"></i>, to:'/setting'},
        { name :'UserName' ,icon:<i className="fa fa-smile-o" aria-hidden="true"></i>, to:`/profile/${id}` }]

    useState(()=>{
        const token =JSON.parse( localStorage.getItem('token'))
    if(!token){
        headerLeft=[
            { name :'Login' ,icon:<i className="fa fa-sign-in" aria-hidden="true"></i> , to:'/login'},
            { name :'Sign Up' ,icon:<i className="fa fa-plus" aria-hidden="true"></i> , to:'/signup'},
        ]
    }
    },[isLogin])



    return(
    <div className={classes.header}>
        <ul>
            <li><Link to='/'>BLOGS</Link></li>
        </ul>   
        <ul>
        {headerLeft.map(subHead=>(
            <li><Link to={subHead.to}>{subHead.icon} {subHead.name}</Link></li>
        ))}
        </ul>
    </div>
    )
}

export default Header;
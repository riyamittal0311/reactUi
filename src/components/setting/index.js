import React ,{useState ,useEffect} from "react";

import {useSelector} from "react-redux"
import {useNavigate} from 'react-router-dom'

import './style.scss';
import Form from "../common/form";

const Setting =()=>{

     const [bio ,setBio ] = useState('')
     const [userEmail ,setEmail] = useState(JSON.parse(localStorage.getItem('user'))?.email || '')
     const [newPassword ,setPassword ] = useState('')
     const navigate = useNavigate()

     useEffect(()=>{
          if(!userEmail){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            return navigate('/login')
          }
     },[])
    

     const fields=[
        {
            placeholder:'Bio',
            onChange:setBio,
            value:bio,
            type:'text'
        },
        {
            placeholder:'Email',
            onChange:setEmail,
            value:userEmail,
            type:'email',
            disabled :true
        },
        {
            placeholder:'New Password',
            onChange:setPassword,
            value:newPassword,
            type:'password'
        }
     ]

  

   


    const onClickButton =(e)=>{
        e.preventDefault()
    }

    const onLogoutClick=()=>{
     localStorage.removeItem('token')
     navigate('/login')
    }
    return(<Form 
        buttonName='Update'
         isLogout={true} 
         pageName='Setting'
         onClickButton={onClickButton}
         fields ={fields}
         onLogoutClick={onLogoutClick}
      
         />)
}

export default Setting;
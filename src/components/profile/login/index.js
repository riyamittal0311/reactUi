import React,{useState} from "react";

import { useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'

import {userThunk} from '../../../api/user'

import Form from '../../common/form/login-sign-form'

const Login=()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    
    const dispatch = useDispatch()
    const navigate= useNavigate()
  

    
const onClickButton =async(e)=>{
    e.preventDefault()
    if( password.trim().length >0 && email.length > 0 ){
        dispatch(userThunk.userLogin(email,password,navigate))
    }
  }
  
    return(<Form 
        pageName={'Login IN'}
        buttonName={'Login'}
        isLogin={true}
        email={email}
        password={password}
        setPassword={setPassword}
        setEmail={setEmail}
        onClickButton={onClickButton} 
        />)
}

export default Login
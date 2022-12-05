import React ,{useState  } from "react";
import { useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'

import {userThunk} from '../../../api/user'


import Form from '../../common/form/login-sign-form'

const Signup=()=>{
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [confirm , setConfirm] = useState('')

const dispatch = useDispatch()
const navigate= useNavigate()



const onClickButton =async(e)=>{
  e.preventDefault()
  if(confirm.trim() === password.trim() && email.length > 0 ){
      dispatch(userThunk.createUSer(email,password,navigate))
  }
}

    return(<Form 
        pageName={'Sign Up'} 
        onClickButton={onClickButton} 
        buttonName={'Create'} 
        isLogin={false}
        email={email}
        password={password}
        confirm={confirm}
        setEmail={setEmail}
        setConfirm={setConfirm}
        setPassword={setPassword}
        />)
}

export default Signup
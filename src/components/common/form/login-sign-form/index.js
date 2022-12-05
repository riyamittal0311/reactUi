import React from "react";
import './style.scss'

const Form =({
    pageName ,
    buttonName,
    isLogin,
    onClickButton,
    email,
    password,
    confirm,
    setPassword,
    setEmail,
    setConfirm

})=>{
    return(
        <div className="common">
    <form className="form ">
        <div className="row heading">{pageName}</div>
        <div className="row "><input type='email'className="form-control" onChange={(e)=>setEmail(e.target.value)}  value={email} placeholder="Email"/></div>
        <div className="row "><input type='password' className="form-control" onChange={(e)=>setPassword(e.target.value)}  value={password} placeholder="Password" /></div>
      {!isLogin &&     <div className="row "><input type='password' className="form-control" onChange={(e)=>setConfirm(e.target.value)}  value={confirm} placeholder="Confirm Password" /></div>}
   <button type="button" className="btn btn-dark" onClick={onClickButton}>{buttonName}</button>
 </form>

</div>
    )
}

export default Form
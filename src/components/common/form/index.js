import React from "react";

import './style.scss';


const Form =(
    {   buttonName ,
        pageName,
        isLogout,
        onClickButton,
        fields,
        onLogoutClick=null
    }
    )=>{
    return(<div className="setting">
    <form className="form">
        <div className="row heading" data-testid='page-title'>{pageName}</div>
        
            {fields?.map(field=>(
                <div className="row ">
                    <input 
                    type={field.type } 
                    className="form-control" 
                    placeholder={field.placeholder }
                    onChange={(e)=>field.onChange(e.target.value)}
                    value={field.value}
                    disabled ={field?.disabled || false}
                    />
              </div>
            ))}
         
   <button type="button"  data-testid="button"  onClick={onClickButton} className="btn btn-dark">{buttonName}</button>

   {isLogout &&
   <>
    <hr/>
    <button onClick={onLogoutClick}  className="btn btn-dark"  type="button">LogOut</button>
    </>
    }
    </form>

</div>)
}

export default Form;
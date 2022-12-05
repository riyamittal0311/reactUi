import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import { useNavigate}  from 'react-router-dom'

import './style.scss'
import Form from "../common/form";
import {articleThunk} from "../../api/article"


const Article=()=>{
    const [title ,setTitle ] = useState('')
    const [article ,setArticle] = useState('')
    const [tags ,setTags] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
   

    const fields=[
       {
           placeholder:'Title',
           onChange:setTitle,
           value:title,
           type:'text'
       },
       {
           placeholder:'Your Article',
           onChange:setArticle,
           value:article,
           type:'text'
       },
       {
           placeholder:'Enter Tags',
           onChange:setTags,
           value:tags,
           type:'text'
       },

    ]

 

  


   const onClickButton =(e)=>{
       e.preventDefault()
      
     const tagArray =  tags.split(',')
       if(title.trim().length>0 && article.length>0){
        dispatch(articleThunk.createNewArticle(title,article,tagArray, navigate))
       }
     
   }


return(
        <Form
        onClickButton={onClickButton}
        fields={fields}
         buttonName='Publish'
        isLogout={false}
         pageName='New Article'/>)
}

export default Article
import React,{useState} from "react";
import {Link}  from 'react-router-dom'
import {useDispatch} from 'react-redux' 

import './style.scss'
import {articleThunk} from '../../../api/article'

const Post =({post })=>{
  const [comment , setComment] = useState(false)
  const [like,setLike] = useState(post?.like?.count || 0)

  const dispatch = useDispatch()

  const countLike=()=>{
    let temp=0;
    if(like ==0 || like > like+1  ){
       setLike(+like+1)
       temp=+like+1
    }
    else{
      setLike(+like-1)
      temp=+like-1
    }
    dispatch(articleThunk.likeArticle(temp,post?._id))
  
  }
    return(<>
    <div  className="post">
        <div className="row" >
         <div className="col-1 image"><img  src='https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg' alt='i'/></div>
         <div className="col-10 user">
            <Link data-testid='user' className="row" to={`/profile/${post?.userId?._id}`}>{post?.userId?.name}</Link>
            <div data-testid='date' className="row date">{post?.createdAt}</div>
         </div>
           <div onClick={countLike}  data-testid='countClick' className="col-1 likes">
           <i className="fa fa-heart" aria-hidden="true"></i>
           <span data-testid='like'>{like}</span>
         </div>
         </div>
       
        <div className="row content">
            <p data-testid='article'>{post.article}</p>
        </div>
        <div className="row last-part">
          <div className="col read-more" onClick={()=>{setComment(!comment)}} > Add Comment</div>
          <div className="col tags">
            {post?.tags?.map(tag=>(
               <span>{tag}</span>
            ))}
           
          </div>
        </div>
    </div>
    </>)
}

export default Post;
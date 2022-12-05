import React,{useState , useEffect} from "react";
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

import {userThunk} from '../../api/user'

const Banner =({user , isSameUser= false,viewUserId,viewUser})=>{

  const [isFollow,setIsFollow] = useState(  user?.followers?.indexOf(viewUserId) > -1 ? true:false)

  const dispatch = useDispatch()
   useEffect(()=>{
     if( user?.followers?.indexOf(viewUserId) > -1 ){
      setIsFollow(true)
     }
     else{
      setIsFollow(false)
     }
   },[user])

   const onClickFollow=()=>{
    setIsFollow(!isFollow)
    dispatch(userThunk.followUser(viewUser?._id,!isFollow))
  }
    return(<div className="row banner">
     <div className="row image">
        <div className="row">  <img src='https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'/>
        <span className="row name"> {isSameUser ? user?.name : viewUser?.name}</span>
      </div>

    </div>

    <div className="row follow">
      {isSameUser?  <Link className="text" to='/setting'> EDIT PROFILE</Link> :   <span data-testid='like' onClick={onClickFollow} className="text"> <i className="fa fa-plus" aria-hidden="true"></i> {
        user?.followers?.indexOf(viewUserId) > -1? 'UNFOLLOW'  :"FOLLOW"
       }</span>}
    
    </div>
    </div>)
}

export default Banner

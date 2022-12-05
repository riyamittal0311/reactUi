import React,{useEffect, useState} from "react";

import {useParams ,useNavigate} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'

import './style.scss'
import Posts from "../common/post";
import Banner from "./banner";
import {userThunk} from '../../api/user'

const Profile =()=>{
    const {id} = useParams()
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const user = useSelector(state=>state.userReducer?.user)
     const viewUser = useSelector(state=>state.userReducer?.viewUser)
    // const posts = useSelector(state=>state.userReducer.viewUser?.articles)

     const [isSameUser,setSameUser] = useState(false)
     const [posts,setPosts] = useState([])
    
    useEffect(()=>{
        const userId = JSON.parse(localStorage.getItem('user'))?._id
        if(!userId){
            localStorage.removeItem('token')
            return navigate('/login')
        }
        if(userId != id){
            setSameUser(false)
        }
        else{
            setSameUser(true)
        }
        dispatch(userThunk.fetchUser(id,userId == id))
        
    },[])

    useEffect(()=>{
        const userId = JSON.parse(localStorage.getItem('user'))?._id
        if(userId == id){
            setPosts(user?.articles)
        }
        else{
            setPosts(viewUser?.articles)
        }

    },[viewUser,user])

return(
    <div className="profile " >
         <Banner 
         user={user} 
         isSameUser={isSameUser}
         viewUserId={id}
         viewUser={viewUser}
         
         />
       
        
        <div className="row">
           <nav>  
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-feed-tab" data-bs-toggle="tab" data-bs-target="#nav-fed" type="button" role="tab" aria-controls="nav-feed" aria-selected="true">MY ARTICLE</button>
            <button className="nav-link" id="nav-fav-tab" data-bs-toggle="tab" data-bs-target="#nav-fav" type="button" role="tab" aria-controls="nav-fav" aria-selected="false">FAV</button>
        </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-feed" role="tabpanel" aria-labelledby="nav-feed-tab"><Posts articles={posts}/></div>
            <div className="tab-pane fade" id="nav-fav" role="tabpanel" aria-labelledby="nav-fav-tab"><Posts/></div>
        </div>
        </div>
    </div>
    )
}

 export default Profile;
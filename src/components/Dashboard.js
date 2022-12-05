import React ,{useEffect} from "react";

import {articleThunk} from '../api/article'
import {useDispatch ,useSelector} from 'react-redux'

import './style.scss'
import Posts from "./common/post";


const Dashboard =()=>{
    const articles = useSelector(state=>state.articleReducer.article?.articles)
    const feed = useSelector(state=>state.articleReducer.feed?.articles)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(articleThunk.fetchAllArticle())
        let userId = JSON.parse(localStorage.getItem('user'))?._id
        if(userId){
            dispatch(articleThunk.fetchFeedArticles())
        }
      
    },[])



    return (<div className="container-fluid dashboard">
        <div className="col-8">
        <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">MY FEED</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">GLOBAL</button>
        </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Posts articles={feed?feed :articles}/></div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><Posts articles={articles}/></div>
        </div>
        </div>
        <div className="col-3 tags-dash">
            <h6 className="row">Popular Tags</h6>
            <div className="tag"> 
                <span>Tag 1</span>
                <span>Tag 2</span>
                <span>Tag 3</span>
                <span>Tag 4</span>
                <span>Tag 5</span>
           </div>    
        </div>
    </div>)
}

export default Dashboard;
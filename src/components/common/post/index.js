import React from "react";

import Post from "./post";


const Posts =({articles})=>{
    return(
    <>
    {articles?.length > 0 &&  articles.map(article=>(
       <Post post={article} />
    ))}


    </>
    )
}

export  default Posts;
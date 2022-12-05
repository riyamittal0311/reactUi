import {API} from '../util/apiHelper'

import {articleActions} from '../reducer/article'



export const articleThunk ={
     createNewArticle :(title,article,tag,navigate)=>{
        const requestBody={
            title:title,
            article :article,
            tag:tag
        }
        console.log(requestBody)

        return (dispatch)=>{
           return  API.POST('http://localhost:3001/newArticle',requestBody,(res)=>{
                console.log(res)
                if(+res.status === 200){
                    navigate('/')
                }
                
            })

      
        }
        },
        fetchAllArticle:()=>{
            return (dispatch)=>{
                return API.GET('http://localhost:3001/allArticles',(res)=>{
                     if(+res.status === 200){
                        dispatch(articleActions.save(res.data))
                     }
                })
            }
        },

        fetchFeedArticles:()=>{
            return dispatch=>{
                return API.GET('http://localhost:3001/feedArticles',res=>{
                    if(+res.status === 200){
                        console.log(res.data)
                        dispatch(articleActions.saveFeed(res.data))
                     }
                })
            }
        },
    

        likeArticle:(like,articleId )=>{
            const requestBody ={
                like:like,
                articleId:articleId
            }
            return dispatch=>{
                return API.POST('http://localhost:3001/likeArticle',requestBody,res=>{
                    if(+res.status === 200){
                        console.log(res.data)
                       // dispatch(articleActions.saveFeed(res.data))
                     }
                })
            } 
        }

}
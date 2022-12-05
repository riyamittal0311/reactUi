import {API} from '../util/apiHelper'

import {userActions} from '../reducer/user'
import {articleThunk} from './article'



export const userThunk ={
     createUSer :(email,password,navigate)=>{
        const requestBody={
            email:email,
            password :password
        }

        return (dispatch)=>{
           return  API.POST('http://localhost:3001/createUser',requestBody,(res)=>{
                console.log(res)
                if(+res.status === 201){
                    localStorage.removeItem('token')
                    navigate('/login')
                }
                
            })

      
        }
        },

    userLogin :(email,password,navigate)=>{
        const requestBody={
            email:email,
            password :password
        }

        return (dispatch)=>{
           return  API.POST('http://localhost:3001/userLogin',requestBody,(res)=>{
                console.log(res)
                if(+res.status === 200){
                  localStorage.setItem('token',JSON.stringify(res.data.token))
                  localStorage.setItem('user',JSON.stringify(res.data.user))
                  dispatch(userActions.save(res.data.user))
                  navigate('/')
                }
                
            })

      
        }

    },

    fetchUser:(id,isSameUser)=>{
        let requestBody ={
            id:id
        }
        return (dispatch)=>{
            return API.POST('http://localhost:3001/user',requestBody,(res)=>{
                if(+res.status === 200){
                    if(!isSameUser){
                        dispatch(userActions.saveViewUser(res.data.user))
                    }
                    else{
                        dispatch(userActions.save(res.data.user))
                    }
                  
                }
            })
        }
    },

    followUser:(id ,isFollow)=>{
        const requestBody ={
            followerId:id,
            addFollower:isFollow
        }
        return (dispatch)=>{
            return API.POST('http://localhost:3001/addFollower',requestBody,(res)=>{
                if(+res.status === 200){
                      localStorage.setItem('user',JSON.stringify(res.data.user))
                     dispatch(userActions.save(res.data.user))

                }
            })
        }
    }
    

}
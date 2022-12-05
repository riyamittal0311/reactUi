import axios from 'axios'

axios.interceptors.request.use(
   config=>{
      const token =JSON.parse(localStorage.getItem('token'))
      if(token){
         config.headers['Authorization'] = 'Bearer '+ token
      }
      return config;
   }
)

export const API ={
    GET:(url,cb)=>{
        return axios.get(url).then(res=>{
         cb(res)
        }).catch(err=>{
         cb(err)
      })
    },
    POST:(url,body,cb)=>{
         axios.post(url,body).then(res=>{
            cb(res)
         }).catch(err=>{
            cb(err)
         })
    }
}
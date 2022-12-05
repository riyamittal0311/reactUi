import { createSlice } from "@reduxjs/toolkit"


const initialState ={
  user:null,
  isLogin: false,
  viewUser:null
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers :{
         save(state, action){
            state.user = action.payload
            state.isLogin = true

    },
    saveViewUser(state,action){
      state.viewUser = action.payload
    }
    }
   
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
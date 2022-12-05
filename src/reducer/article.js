import {createSlice} from '@reduxjs/toolkit'

const initialState={
    article:[],
    feed:[]
}

const articles =createSlice({
    name:"articles",
    initialState,
    reducers:{
        save(state,action){
            state.article =action.payload
        },
        saveFeed(state,action){
            state.feed =action.payload
        }
    }
 
})


export const articleActions = articles.actions
export const articleReducer = articles.reducer
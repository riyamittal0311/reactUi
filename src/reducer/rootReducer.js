import { combineReducers } from "@reduxjs/toolkit"
import {userReducer} from './user'
import { articleReducer } from "./article"

export const rootReducer =combineReducers({
    userReducer :userReducer ,// this name is used to fetch data,
    articleReducer:articleReducer
})
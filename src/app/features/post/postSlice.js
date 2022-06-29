import { createSlice } from "@reduxjs/toolkit";


const initialState = [{
    id: '1', title:"hello" , content:"this is user"
},
    {
    id:'2', title:"helo2", content:"User is great"
    }]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{}
})

export const selectAllPost = (state) => state.posts;        
    
export  default postsSlice.reducer
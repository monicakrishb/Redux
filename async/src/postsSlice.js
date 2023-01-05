import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'1',title:'redux tool',content:"Hi redux"},
    {id:'2',title:'slices',content:"the more i say slice,the more i want pizza"}
]
const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{}
})
export default postsSlice.reducer
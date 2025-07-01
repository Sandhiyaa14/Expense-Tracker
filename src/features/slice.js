import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenseList : JSON.parse(localStorage.getItem("expenseList"))||[]
}

const slice = createSlice({
    name:"expenseTracker",
    initialState,
    reducers:{
        addToList: (state,action) => {
          state.expenseList.push(action.payload)
          localStorage.setItem("expenseList",JSON.stringify(state.expenseList))
        },
    }
})

export const {addToList,deleteFromList} = slice.actions
export default slice.reducer
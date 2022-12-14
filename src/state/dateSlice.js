import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    start : null,
    end:null
}

const dateSlice = createSlice({
  name:'date',
  initialState,
  reducers:{
    setDateStart(state,action){
      state.start = action.payload;
    },
    setDateEnd(state,action){
      state.end = action.payload;
    },
  }
})

export const dateReducer = dateSlice.reducer;
export const {setDateStart,setDateEnd} = dateSlice.actions;
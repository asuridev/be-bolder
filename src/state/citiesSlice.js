import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    citySource : null,
    cityDestination:null
}

const citiesSlice = createSlice({
  name:'cities',
  initialState,
  reducers:{
    setCitySource(state,action){
      state.citySource = action.payload;
    },
    setcityDestination(state,action){
      state.cityDestination = action.payload;
    },
  }
})

export const citiesReducer = citiesSlice.reducer;
export const {setCitySource,setcityDestination} = citiesSlice.actions;
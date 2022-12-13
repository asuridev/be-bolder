import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    value : 'ow'
}

const roundTripSlice = createSlice({
  name:'roundTrip',
  initialState,
  reducers:{
    setRoundTrip(state,action){
      state.value = 'rt'
    },
    setOnlyWay(state,action){
      state.value = 'ow'
    }
  }
})

export const roundTripReducer = roundTripSlice.reducer;
export const {setRoundTrip,setOnlyWay} = roundTripSlice.actions;
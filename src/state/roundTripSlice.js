import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    value : 'rt'
}

const roundTripSlice = createSlice({
  name:'roundTrip',
  initialState,
  reducers:{
    setRoundTrip(state,action){
      state.value = action.payload;
    },
  }
})

export const roundTripReducer = roundTripSlice.reducer;
export const {setRoundTrip} = roundTripSlice.actions;
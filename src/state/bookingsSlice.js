import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    going : null,
    return:null
}

const bookingsSlice = createSlice({
  name:'booking',
  initialState,
  reducers:{
    setGoBooking(state,action){
      state.going = action.payload;
    },
    setReturnBooking(state,action){
      state.return = action.payload;
    },
  }
})

export const bookingsReducer = bookingsSlice.reducer;
export const {setGoBooking,setReturnBooking} = bookingsSlice.actions;
import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    data:[],
}

const infoSlice = createSlice({
  name:'imfo',
  initialState,
  reducers:{
    setData(state,action){
      const d = state.data.filter(item => item.key !== action.payload.key );
      state.data = [...d, action.payload];
    },
  }
})

export const infoReducer = infoSlice.reducer;
export const {setData} = infoSlice.actions;
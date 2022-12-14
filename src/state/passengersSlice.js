import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adults: 1,
  kids: 0,
  babies: 0,
};

const passengersSlice = createSlice({
  name: "passenger",
  initialState,
  reducers: {
    incrementAdults(state, action) {
      state.adults += 1;
    },
    decrementAdults(state, action) {
      state.adults -= 1;
    },
    incrementKids(state, action) {
      state.kids += 1;
    },
    decrementKids(state, action) {
      state.kids -= 1;
    },
    incrementBabies(state, action) {
      state.babies += 1;
    },
    decrementBabies(state, action) {
      state.babies -= 1;
    },
  },
});

export const passengersReducer = passengersSlice.reducer;
export const {
  incrementAdults,
  decrementAdults,
  incrementKids,
  decrementKids,
  incrementBabies,
  decrementBabies
} = passengersSlice.actions;

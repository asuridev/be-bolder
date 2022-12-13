import { configureStore } from "@reduxjs/toolkit";
import { roundTripReducer } from "./roundTripSlice";

export const store = configureStore({
  reducer:{
    roundTripe : roundTripReducer
  }
})
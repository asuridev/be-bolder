import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./citiesSlice";
import { roundTripReducer } from "./roundTripSlice";

export const store = configureStore({
  reducer:{
    roundTripe : roundTripReducer,
    cities:citiesReducer
  }
})
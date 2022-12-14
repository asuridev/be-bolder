import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./citiesSlice";
import { dateReducer } from "./dateSlice";
import { roundTripReducer } from "./roundTripSlice";

export const store = configureStore({
  reducer:{
    roundTrip : roundTripReducer,
    cities:citiesReducer,
    date: dateReducer
  }
})
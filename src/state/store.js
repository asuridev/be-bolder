import { configureStore } from "@reduxjs/toolkit";
import { bookingsReducer } from "./bookingsSlice";
import { citiesReducer } from "./citiesSlice";
import { dateReducer } from "./dateSlice";
import { infoReducer } from "./infoSlice";
import { passengersReducer } from "./passengersSlice";
import { roundTripReducer } from "./roundTripSlice";

export const store = configureStore({
  reducer:{
    roundTrip : roundTripReducer,
    cities:citiesReducer,
    date: dateReducer,
    passengers: passengersReducer,
    bookings:bookingsReducer,
    infoPassenger:infoReducer
  }
})
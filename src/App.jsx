import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { ResponsiveAppBar } from "./components/AppBar"
import { GoBooking } from "./components/GoBooking"

import { Hero } from "./components/Hero"
import { InfoPassengers } from "./components/InfoPassengers"
import { ReturnBooking } from "./components/ReturnBooking"



function App() {
  
  return (
    <Box>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={ <Hero/>}/>
        <Route path="/go-booking" element={ <GoBooking/>}/>
        <Route path="/return-booking" element={ <ReturnBooking/>}/>
        <Route path="/info-passenger" element={ <InfoPassengers/>}/>
      </Routes>
    </Box>
  )
}

export default App

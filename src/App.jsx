import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { ResponsiveAppBar } from "./components/AppBar"
import { GoBooking } from "./components/GoBooking"

import { Hero } from "./components/Hero"



function App() {
  
  return (
    <Box>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={ <Hero/>}/>
        <Route path="/go-booking" element={ <GoBooking/>}/>
      </Routes>
    </Box>
  )
}

export default App

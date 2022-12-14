import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { ResponsiveAppBar } from "./components/AppBar"
import { Bookings } from "./components/Bookings"
import { Hero } from "./components/Hero"



function App() {
  
  return (
    <Box>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={ <Hero/>}/>
        <Route path="/bookings" element={ <Bookings/>}/>
      </Routes>
    </Box>
  )
}

export default App

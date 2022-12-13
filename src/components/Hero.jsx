import { Box } from '@mui/material'
import React from 'react'
import hero from '../assets/hero.jpg'

export const Hero = () => {
  return (
    <Box sx={{
      height:'70vh',
    }}>
      <img className="hero-img" src={hero} alt="" />
    </Box>
  )
}

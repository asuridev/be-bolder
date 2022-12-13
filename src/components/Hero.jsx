import { Box } from '@mui/material'
import React from 'react'
import hero from '../assets/hero.jpg'
import { Panel } from './Panel'

export const Hero = () => {
  return (
    <Box sx={{
      height:'60vh',
      position:'relative'
    }}>
      <img className="hero-img" src={hero} alt="" />
      <Panel/>
    </Box>
  )
}

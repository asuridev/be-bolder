import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export const FlyCard = ({info}) => {
  
  const {cities} = useSelector(state => state);


  return (
    <Paper sx={{padding:'2rem',display:'flex', alignItems:'center', border:'1px solid #DEDDDD', marginBottom:'1rem'}}>
      <Box sx={{paddingRight:'2rem'}}>
        <Typography sx={{fontWeight:'500'}} variant="h5">{info.horaSalida}</Typography>
        <Typography>{cities.citySource}</Typography>
      </Box>
      
      <Box sx={{flexGrow:'1'}}>
        <Box>
          <Typography sx={{textAlign:'center',fontSize:'0.8rem'}}>{`${info.conexion} - ${info.tiempoVuelo}h - ${info.avion}`}</Typography>
        </Box>
        <Box>
          <Divider>
            <FlightTakeoffIcon/>
          </Divider>
          <Typography sx={{textAlign:'center',fontSize:'0.8rem'}}>incluye trayeco operado por la compañia</Typography>
        </Box>
      </Box>


      <Box sx={{paddingLeft:'2rem'}}>
        <Typography sx={{fontWeight:'500'}} variant="h5">{info.horaLLegada}</Typography>
        <Typography>{cities.cityDestination}</Typography>
      </Box>
      
      <Divider sx={{margin:'0 2rem'}} orientation="vertical" flexItem/>
      <Typography sx={{fontWeight:'500'}} variant="h5">{` $${info.precio} COP`}</Typography>
    </Paper>
  )
}

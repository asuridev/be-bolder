import { Box, Button, Paper } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

export const Confirm = () => {
  const {data} = useSelector(state => state.infoPassenger);
  const {adults,kids,babies}  = useSelector((state) => state.passengers);
  
  let isEnablePay = false;
  let totalCompetados =  data.filter(item => item.isCompleted === true).length
  
  if(totalCompetados === adults + kids){
    console.log('listo para pagar.....');
    isEnablePay = true;
  }else{
    isEnablePay = false;
  }
  

  return (
    <Box sx={{ display:'flex',justifyContent:'end', width: "870px", padding: "1rem", margin: "0.5rem auto" }}>
      <Button disabled={!isEnablePay} size="large" variant="contained" color="primary">Confirmar</Button>
    </Box>
    
  //   <Paper
  //     elevation={6}
  //     sx={{ width: "870px", padding: "1rem", margin: "0.5rem auto" }}
  //   >
  //     pagando...
  //  </Paper>
  )
}

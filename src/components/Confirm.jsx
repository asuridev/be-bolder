import { Box, Button, Paper } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Confirm = () => {
  const {data} = useSelector(state => state.infoPassenger);
  const {adults,kids}  = useSelector((state) => state.passengers);
  const navigate = useNavigate();
  
  let isEnablePay = false;
  let totalCompetados =  data.filter(item => item.isCompleted === true).length
  
  if(totalCompetados === adults + kids){
    isEnablePay = true;
  }else{
    isEnablePay = false;
  }
  
  const handleClick = ()=>{
    navigate('/pay');
  }

  return (
    <Box onClick={handleClick} sx={{ display:'flex',justifyContent:'end', width: "870px", padding: "1rem", margin: "0.5rem auto" }}>
      <Button disabled={!isEnablePay} size="large" variant="contained" color="primary">Confirmar</Button>
    </Box>
  )
}

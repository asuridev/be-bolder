import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { InfoForm } from "./InfoForm";
import { Confirm} from "./Confirm";

export const InfoPassengers = () => {
  const {adults,kids}  = useSelector((state) => state.passengers);
  
  const arrAdults = [];
  const arrKids = [];

  for(let i = 0 ; i<adults ; i++){
    arrAdults.push(i);
  }
  for(let i = 0 ; i<kids ; i++){
    arrKids.push(i);
  }


  return (
    <Box sx={{ padding: "2rem" }}>
      {
        arrAdults.map(i => <InfoForm title={`Adulto-${i+1}`} key ={i}/>)
      }
      {
        arrKids.map(i => <InfoForm title={`Niño-${i+1}`} key ={i+100}/>)
      }
      <Confirm/>
    </Box>
  );
};

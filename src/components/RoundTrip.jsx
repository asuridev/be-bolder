import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {setRoundTrip} from '../state/roundTripSlice'

export  function RoundTrip() {
  const dispatach = useDispatch();
  const {value} = useSelector(state => state.roundTripe)

  const handleChange = (event) => {
       dispatach(setRoundTrip(event.target.value));
  };

  return (
    <Box>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="rt" control={<Radio />} label="Ida y vuelta" />
        <FormControlLabel value="ow" control={<Radio />} label="Solo ida" />
      </RadioGroup>
    </FormControl>
    </Box>
  );
}
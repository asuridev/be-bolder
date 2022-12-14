import { Box, Typography } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDispatch, useSelector } from "react-redux";
import { setDateEnd, setDateStart } from "../state/dateSlice";
import { format } from "date-fns";

const DateRoundTrip = () => {
  const {start,end} = useSelector(state => state.date);
  const dispatch = useDispatch();

  const handleChangeStart = (newValue) => {
    const dateWithFormat = format(newValue,'MM/dd/yyyy'); 
    dispatch(setDateStart(dateWithFormat));
  };

  const handleChangeEnd= (newValue) => {
    const dateWithFormat = format(newValue,'MM/dd/yyyy');
    dispatch(setDateEnd (dateWithFormat));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ marginRight: "1rem", width: 130 }}>
        <DatePicker
          label="Salida"
          value={start}
          onChange={handleChangeStart}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </Box>
      <Box sx={{ width: 130 }}>
        <DatePicker
          label="Vuelta"
          value={end}
          onChange={handleChangeEnd}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </Box>
    </Box>
  );
};

const DateOnlyWay = () => {
  const {start,end} = useSelector(state => state.date);
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    const dateWithFormat = format(newValue,'MM/dd/yyyy');
    dispatch(setDateStart(dateWithFormat));
    dispatch(setDateEnd(null));
  };
  
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: 260 }}>
        <DatePicker
          label="Fecha de Ida"
          value={start}
          onChange={handleChange}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </Box>
    </Box>
  );
};

export const When = () => {
  const { value } = useSelector((state) => state.roundTrip);
  return (
    <Box sx={{ marginTop: ".5rem" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Typography gutterBottom sx={{fontWeight:'500'}} variant="h5">
          ¿Cuándo viajas?
        </Typography>
        {value === "rt" ? <DateRoundTrip /> : <DateOnlyWay />}
      </LocalizationProvider>
    </Box>
  );
};

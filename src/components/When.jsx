import { Box, Typography } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDispatch, useSelector } from "react-redux";
import { setDateEnd, setDateStart } from "../state/dateSlice";

const DateRoundTrip = () => {
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  const dispatch = useDispatch();

  const handleChangeStart = (newValue) => {
    setValue1(newValue);
    dispatch(setDateStart(JSON.stringify(newValue)));
  };

  const handleChangeEnd= (newValue) => {
    setValue2(newValue);
    dispatch(setDateEnd (JSON.stringify(newValue)));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ marginRight: "1rem", width: 130 }}>
        <DatePicker
          label="Salida"
          value={value1}
          onChange={handleChangeStart}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </Box>
      <Box sx={{ width: 130 }}>
        <DatePicker
          label="Vuelta"
          value={value2}
          onChange={handleChangeEnd}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </Box>
    </Box>
  );
};

const DateOnlyWay = () => {
  const [value, setValue] = React.useState(null);
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    setValue(newValue);
    dispatch(setDateStart(JSON.stringify(newValue)));
    dispatch(setDateEnd(null));
  };
  
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: 260 }}>
        <DatePicker
          label="Fecha de Ida"
          value={value}
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

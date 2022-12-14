import { Box, Typography } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useSelector } from "react-redux";

const DateRoundTrip = () => {
  const [value, setValue] = React.useState(null);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ marginRight: "1rem", width: 130 }}>
        <DatePicker
          label="Salida"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </Box>
      <Box sx={{ width: 130 }}>
        <DatePicker
          label="Vuelta"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </Box>
    </Box>
  );
};

const DateOnlyWay = () => {
  const [value, setValue] = React.useState(null);
  const handleChange = (newValue) => {
    setValue(newValue);
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

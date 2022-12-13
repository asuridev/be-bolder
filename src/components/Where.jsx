import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Typography } from "@mui/material";

export function Where() {
  const [value, setValue] = React.useState(null);

  const onChange = (e, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: ".5rem" }}>
      <Typography gutterBottom variant="h4">¿A dónde viajas?</Typography>
      <Box sx={{display:"flex"}}>
        <Box sx={{ marginRight: "0.5rem" }}>
          <Autocomplete
            disablePortal
            onChange={onChange}
            value={value}
            id="combo-box-demo"
            options={cities}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Desde" />
            )}
          />
        </Box>
        <Box>
          <Autocomplete
            disablePortal
            onChange={onChange}
            value={value}
            id="combo-box-demo"
            options={cities}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Hacia" />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const cities = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

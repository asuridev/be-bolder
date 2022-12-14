import { Box, Button, Paper } from "@mui/material";
import { How } from "./How";
import { RoundTrip } from "./RoundTrip";
import { When } from "./When";
import { Where } from "./Where";

export const Panel = () => {
  return (
    <Paper
      elevation={5}
      sx={{
        width: "95%",
        height: "250px",
        position: "absolute",
        bottm: 0,
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Box sx={{ margin: "1rem" }}>
        <RoundTrip />
        <Box sx={{display:'flex'}}>
          <Where />
          <When />
          <How/>
          {/* <Button variant="contained" color="secondary">Buscar Vuelos</Button> */}
        </Box>
      </Box>
    </Paper>
  );
};

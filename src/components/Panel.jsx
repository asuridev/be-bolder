import { Box, Button, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { How } from "./How";
import { RoundTrip } from "./RoundTrip";
import { When } from "./When";
import { Where } from "./Where";

export const Panel = () => {
  const navigate = useNavigate()
  const { cities, date } = useSelector((state) => state);
  const isBtnEnable =
    cities.citySource && cities.cityDestination && date.start && date.end;

    
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
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box sx={{ display: "flex" }}>
            <Where />
            <When />
            <How />
          </Box>
          <Box sx={{ display: "flex", alignItems: "end" }}>
            <Button
              disabled={!isBtnEnable}
              variant="contained"
              color="secondary"
              size="large"
              onClick={()=> navigate('bookings')}
            >
              Buscar Vuelos
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

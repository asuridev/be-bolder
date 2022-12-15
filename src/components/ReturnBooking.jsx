import { Box, CircularProgress, Icon, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { RflyCard } from "./RflyCard";

export const ReturnBooking = () => {
  const {  cities, date } = useSelector((state) => state);
  const [isLoading, setLoading] = useState(true);
  const [flights, setFlights] = useState([]);


  const getOptions = async () => {
    const querySnapshot = await getDocs(collection(db, "fakeAPI"));
    const options = [];
    querySnapshot.forEach((doc) => {
      options.push(doc.data());
    });
    setLoading(false);
    setFlights([...options])
    console.log(options);
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f3f2f2",
        minHeight: "100vh",
        padding: "1rem 3rem",
      }}
    >
      <Paper sx={{ backgroundColor: "#fff", padding: "2rem" }}>
        <Box sx={{ display: "flex",marginBottom:'2rem' }}>
          <FlightTakeoffIcon sx={{ fontSize: "2rem" }} />
          <Typography
            sx={{ fontWeight: "500", marginLeft: "1rem" }}
            gutterBottom
            variant="h5"
          >
            {` Salida de ${cities.cityDestination} a ${cities.citySource} - ${date.end}`}
          </Typography>
        </Box>
        {isLoading ? (
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          
            flights.map(flight => <RflyCard key={flight.avion} info={flight}/>)
          
        )}
      </Paper>
    </Box>
  );
};
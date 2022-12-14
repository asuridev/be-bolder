import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { setcityDestination, setCitySource } from "../state/citiesSlice";
import { useDispatch, useSelector } from "react-redux";

export function Where() {
  const {citySource,cityDestination} = useSelector(state => state.cities);
  const [cities, setCities] = React.useState([]); 
  const [source, setSource] = React.useState([]); 
  const [destination, setDestination] = React.useState([]); 
  const dispatch = useDispatch();
  

  const getCities = async () => {
    const querySnapshot = await getDocs(collection(db, "cities"));
    const ciudades = [];
    querySnapshot.forEach((doc) => {
      ciudades.push(doc.data());
    });
    setCities([...ciudades]); // establezco todas las ciudades diponibles
    const cs = ciudades.map(city => city.name); 
    setSource([...cs]); //los nombres de la ciudades destinos
  };

  React.useEffect(() => {
    getCities();
  }, []);


  const onChangeOrigen = (e, newValue) => {
    console.log(newValue);
    dispatch(setCitySource(newValue));
    dispatch(setcityDestination(null));
    const cityOrigin = cities.find( city => city.name === newValue );
    const cs = cityOrigin?.link.map(name => name) || [];
    setDestination([...cs]);
  };

  const onChangeDestino = (e, newValue)=>{
    console.log(newValue);
    dispatch(setcityDestination(newValue));
  }

  return (
    <Box sx={{ marginTop: ".5rem" }}>
      <Typography gutterBottom sx={{fontWeight:'500'}} variant="h5">
        ¿A dónde viajas?
      </Typography>
      <Box sx={{ display: "flex",marginRight:'2rem' }}>
        <Box sx={{ marginRight: "0.5rem" }}>
          <Autocomplete
            disablePortal
            onChange={onChangeOrigen}
             value={citySource}
            id="combo-box-demo"
            options={source}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Desde" />
            )}
          />
        </Box>
        <Box>
          <Autocomplete
            disablePortal
            onChange={onChangeDestino}
            value={cityDestination}
            id="combo-box-destino"
            options={destination}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Hacia" />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
}


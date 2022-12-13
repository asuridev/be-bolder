import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { setcityDestination, setCitySource } from "../state/citiesSlice";
import { useDispatch } from "react-redux";

export function Where() {
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
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
    setValue1(newValue);
    setValue2(null);
    const cityOrigin = cities.find( city => city.name === newValue );
    const cs = cityOrigin?.link.map(name => name) || [];
    setDestination([...cs]);
  };

  const onChangeDestino = (e, newValue)=>{
    console.log(newValue);
    dispatch(setcityDestination(newValue));
    setValue2(newValue);
  }

  return (
    <Box sx={{ marginTop: ".5rem" }}>
      <Typography gutterBottom variant="h4">
        ¿A dónde viajas?
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginRight: "0.5rem" }}>
          <Autocomplete
            disablePortal
            onChange={onChangeOrigen}
             value={value1}
            id="combo-box-demo"
            options={source}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Desde" />
            )}
          />
        </Box>
        <Box>
          <Autocomplete
            disablePortal
            onChange={onChangeDestino}
            value={value2}
            id="combo-box-destino"
            options={destination}
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


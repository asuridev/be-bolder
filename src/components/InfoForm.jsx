import { Box, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../state/infoSlice";

export const InfoForm = ({ title }) => {
  const [dataForm, setDataForm] = useState({});
   const dispatch = useDispatch();

  const isCompleted =
    Boolean(dataForm["id"]) &&
    Boolean(dataForm["name"]) &&
    Boolean(dataForm["lastName"]) &&
    Boolean(dataForm["telephone"]) &&
    Boolean(dataForm["email"]) &&
    Boolean(dataForm["age"])
    ;

    useEffect(()=>{
      if(isCompleted){
        dispatch(setData({key:title, ...dataForm,isCompleted:true}));
      }else{
        dispatch(setData({key:title,isCompleted:false}));
      }
    })
    

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Paper
      elevation={6}
      sx={{ width: "870px", padding: "1rem", margin: "0.5rem auto" }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginBottom: "1rem",
          justifyContent: "space-around",
        }}
      >
        <TextField
          name="id"
          label="Identificacion"
          value={dataForm["id"] ?? ""}
          onChange={handleChange}
        />
        <TextField
          name="name"
          label="Nombres"
          value={dataForm["name"] ?? ""}
          onChange={handleChange}
        />
        <TextField
          name="lastName"
          label="Apellidos"
          value={dataForm["lastName"] ?? ""}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <TextField
          name="telephone"
          label="Telefono"
          value={dataForm["telephone"] ?? ""}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Correo electronico"
          value={dataForm["email"] ?? ""}
          onChange={handleChange}
        />
        <TextField
          name="age"
          label="edad"
          value={dataForm["age"] ?? ""}
          onChange={handleChange}
        />
      </Box>
    </Paper>
  );
};

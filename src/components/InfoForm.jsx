import { Box, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const InfoForm = () => {

  const [dataForm, setDataForm] = useState({});

  console.log(dataForm)

  const handleChange = (e) =>{
    setDataForm({
      ...dataForm,
      [e.target.name]:e.target.value
    });
  }

  return (
    <Paper elevation={6} sx={{width:'870px', padding:'1rem', margin:'0 auto'}}>
        <Typography variant="h5" gutterBottom>Adult-1</Typography>
      <Box sx={{display:'flex', marginBottom:'1rem', justifyContent:"space-around"}}>
      <TextField
        name="id"
        label="Identificacion"
        value={dataForm['id'] ?? ""}
        onChange={handleChange}
      />
       <TextField
        name="name"
        label="Nombres"
        value={dataForm['name'] ?? ""}
        onChange={handleChange}
      />
      <TextField
        name="lastNname"
        label="Apellidos"
        value={dataForm['lastNname']  ?? ""}
        onChange={handleChange}
      />
      </Box>
      <Box sx={{display:'flex', justifyContent:"space-around"}}>
      <TextField
        name="telephone"
        label="Telefono"
        value={dataForm['telephone']?? ""}
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Correo electronico"
        value={dataForm['email'] ?? ""}
        onChange={handleChange}
      />
      <TextField
        name="age"
        label="edad"
        value={dataForm['age'] ?? "" }
        onChange={handleChange}
      />
      </Box>
    </Paper>
  )
}

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

export function How() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ marginTop: ".5rem", marginLeft: "2rem" }}>
        <Typography gutterBottom sx={{ fontWeight: "500" }} variant="h5">
          ¿Cómo viajas?
        </Typography>
        <TextField
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          label="Pasajeros"
          variant="standard"
        />
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ width: "320px", padding: "1rem" }}>

          {/* adulto */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ lineHeight: 0.5 }} variant="h6">
                Adultos
              </Typography>
              <Typography sx={{}} variant="body2">
                Igual o Mayores de 12 Años
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
              <Typography sx={{ lineHeight: 0.5 }} variant="h6">
                1
              </Typography>
              <IconButton>
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{marginBottom:'.5rem'}}/>
          {/* niños */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ lineHeight: 0.5 }} variant="h6">
                Niños
              </Typography>
              <Typography sx={{}} variant="body2">
                2 - 11 años
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
              <Typography sx={{ lineHeight: 0.5 }} variant="h6">
                1
              </Typography>
              <IconButton>
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{marginBottom:'.5rem'}}/>
    
          {/* bebe */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ lineHeight: 0.5 }} variant="h6">
                Bebes
              </Typography>
              <Typography sx={{}} variant="body2">
                Menores de 2 años
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
              <Typography sx={{ lineHeight: 0.5 }} variant="h6">
                1
              </Typography>
              <IconButton>
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>
          
        </Box>
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}

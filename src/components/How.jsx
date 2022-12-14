import * as React from "react";
import Menu from "@mui/material/Menu";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Divider, IconButton, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAdults,
  decrementBabies,
  decrementKids,
  incrementAdults,
  incrementBabies,
  incrementKids,
} from "../state/passengersSlice";

export function How() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { adults, kids, babies } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onAddAdults = () => {
    dispatch(incrementAdults());
  };

  const onSubAdults = () => {
    if (adults > 1) {
      dispatch(decrementAdults());
    }
  };

  const onAddKids = () => {
    dispatch(incrementKids());
  };

  const onSubKids = () => {
    if (kids > 0) {
      dispatch(decrementKids());
    }
  };

  const onAddBabies = () => {
    if(babies < adults){
      dispatch(incrementBabies());
    }
  };
  const onSubBabies = () => {
    if (babies > 0) {
      dispatch(decrementBabies());
    }
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
          value={`${adults + kids} Pasajeros`}
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
              marginBottom: ".5rem",
            }}
          >
            <Box>
              <Typography sx={{ lineHeight: 1 }} variant="h6">
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
              <IconButton onClick={onSubAdults}>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography sx={{ lineHeight: 1 }} variant="h6">
                {adults}
              </Typography>
              <IconButton onClick={onAddAdults}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ marginBottom: ".5rem" }} />
          {/* niños */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: ".5rem",
            }}
          >
            <Box>
              <Typography sx={{ lineHeight: 1 }} variant="h6">
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
              <IconButton onClick={onSubKids}>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography sx={{ lineHeight: 1 }} variant="h6">
                {kids}
              </Typography>
              <IconButton onClick={onAddKids}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ marginBottom: ".5rem" }} />

          {/* bebe */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: ".5rem",
            }}
          >
            <Box>
              <Typography sx={{ lineHeight: 1 }} variant="h6">
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
              <IconButton onClick={onSubBabies}>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography sx={{ lineHeight: 1 }} variant="h6">
                {babies}
              </Typography>
              <IconButton onClick={onAddBabies}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Menu>
    </div>
  );
}

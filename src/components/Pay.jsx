import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const Pay = () => {
  const [isLoading, setLoading] = useState(true);
  const [neto, setNeto] = useState(0);
  const [infoBabies, setInfoBabies] = useState([]);
  const [dataWithDescuento, setDescuento] = useState([]);
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.infoPassenger);
  const { adults, kids, babies } = useSelector((state) => state.passengers);
  const { going, return: back } = useSelector((state) => state.bookings);

  const calcularDescuentos = async () => {
    //determino la informacion de infantes
    const arrBabies = [];
    for (let i = 0; i < babies; i++) {
      let descuento = 90;
      let valor = going?.precio + (back?.precio ?? 0);
      let total = valor - valor * (descuento / 100);
      arrBabies.push({ key: `infante-${i + 1}`, descuento, valor, total });
    }
    //pendiente consultar base de datos para agregar descuentos
    const withDescuento = data.map((item) => {
      let descuento = 0;
      if (Number(item.age) > 65) {
        descuento += 3;
      }

      //seguir trabajando aqui.

      // agregando informacion de total y descuento
      let valor = going?.precio + (back?.precio ?? 0);
      let total = valor - valor * (descuento / 100);
      return { ...item, valor, total, descuento };
    });
    // fin

    //calculo del valor total
    const totalAdultosYniños = withDescuento.reduce(
      (acum, item) => (acum += item.total),
      0
    );
    const totalPagar = arrBabies.reduce(
      (acum, item) => (acum += item.total),
      totalAdultosYniños
    );

    setInfoBabies(arrBabies);
    setNeto(totalPagar);
    setLoading(false);
    setDescuento(withDescuento);
  };

  const onPay = ()=>{
    
  }

  useEffect(() => {
    calcularDescuentos();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f3f2f2",
        minHeight: "100vh",
        padding: "1rem 3rem",
      }}
    >
      <Paper
        sx={{ backgroundColor: "#fff", padding: "2rem", position: "relative" }}
      >
        <Box sx={{ display: "flex", marginBottom: "2rem" }}>
          <FlightTakeoffIcon sx={{ fontSize: "2rem" }} />
          <Typography
            sx={{ fontWeight: "500", marginLeft: "1rem" }}
            gutterBottom
            variant="h5"
          >
            Resumen de Pago
          </Typography>
        </Box>
        {isLoading ? (
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          // creaacion de la tabla de resumen de pago
          <Box>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Pasajero</TableCell>
                    <TableCell align="right">Valor</TableCell>
                    <TableCell align="right">Descuento</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataWithDescuento.map((row) => (
                    <TableRow
                      key={row.key}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.key}
                      </TableCell>
                      <TableCell align="right">{row.valor}</TableCell>
                      <TableCell align="right">{`${row.descuento}%`}</TableCell>
                      <TableCell align="right">{row.total}</TableCell>
                    </TableRow>
                  ))}
                  {infoBabies.map((row) => (
                    <TableRow
                      key={row.key}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.key}
                      </TableCell>
                      <TableCell align="right">{row.valor}</TableCell>
                      <TableCell align="right">{`${row.descuento}%`}</TableCell>
                      <TableCell align="right">{row.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Typography
                sx={{ fontWeight: "500", marginLeft: "1rem" }}
                gutterBottom
                variant="h5"
              >
                {`Total a pagar: $${neto} COP`}
              </Typography>
            </TableContainer>
          </Box>
        )}
        <Button
          sx={{
            padding:'0.6rem 4rem',
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%,50%)",
          }}
          onClick={onPay}
          color="secondary"
          size="large"
          variant="contained"
        >
          Pagar
        </Button>
      </Paper>
    </Box>
  );
};

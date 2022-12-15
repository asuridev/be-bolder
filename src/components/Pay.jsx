import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import {
  Box,
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
  const [dataWithDescuento, setDescuento] = useState([]);
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.infoPassenger);
  const { adults, kids } = useSelector((state) => state.passengers);
  const { going, return: back } = useSelector((state) => state.bookings);

  console.log(going);
  console.log(back);

  const calcularDescuentos = async () => {
    // const querySnapshot = await getDocs(collection(db, "fakeAPI"));
    // const options = [];
    // querySnapshot.forEach((doc) => {
    //   options.push(doc.data());
    // });
    // setLoading(false);
    // //setFlights([...options])
    // console.log(options);
    const withDescuento = data.map((item) => {
      let descuento = 0;
      if (Number(item.age) > 65) {
        descuento += 3;
      }

      // agregando informacion de total y descuento
      let valor = going?.precio + (back?.precio ?? 0);
      let total = valor - valor * (descuento / 100);
      return { ...item, valor, total, descuento };
    });

    const totalPagar = withDescuento.reduce(
      (acum, item) => (acum += item.total),
      0
    );
    setNeto(totalPagar);
    setLoading(false);
    setDescuento(withDescuento);
    console.log(withDescuento);
    console.log(totalPagar);
  };

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
      <Paper sx={{ backgroundColor: "#fff", padding: "2rem" }}>
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
                </TableBody>
              </Table>
              <Typography
                sx={{ fontWeight: "500", marginLeft: "1rem" }}
                gutterBottom
                variant="h5"
              >
                {`Total a pagar: ${neto} COP`}
              </Typography>
            </TableContainer>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

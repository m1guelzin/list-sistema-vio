import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "../axios/axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Ingressos() {
  const [ingressos, setIngressos] = useState([]);

  async function getIngressos() {
    await api.getIngressos().then(
      (response) => {
        console.log(response.data.ingresso);
        setIngressos(response.data.ingresso);
      },
      (error) => {
        console.log("Erro ", error);
      }
    );
  }

  const listIngressos = ingressos.map((ingresso) => {
    return (
      <TableRow key={ingresso.id_ingresso}>
        <TableCell align="center">{ingresso.preco}</TableCell>
        <TableCell align="center">{ingresso.tipo}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getIngressos();
  }, []);

  return (
    <div>
      <h2>Lista de Ingressos</h2>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "green", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listIngressos}</TableBody>
        </Table>
      </TableContainer>
      <h1></h1>
      <Button fullWidth variant="contained" component={Link} to="/home">
        Voltar para Home
      </Button>
    </div>
  );
}

export default Ingressos;

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

function Organizadores() {
  const [organizadores, setOrganizadores] = useState([]);

  async function getOrganizadores() {
    await api.getOrganizadores().then(
      (response) => {
        console.log(response.data.orgs);
        setOrganizadores(response.data.orgs);
      },
      (error) => {
        console.log("Erro ", error);
      }
    );
  }

  const listOrganizadores = organizadores.map((organizador) => {
    return (
      <TableRow key={organizador.id_organizador}>
        <TableCell align="center">{organizador.nome}</TableCell>
        <TableCell align="center">{organizador.email}</TableCell>
        <TableCell align="center">{organizador.telefone}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getOrganizadores();
  }, []);

  return (
    <div>
      <h2>Lista de Organizadores</h2>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "green", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Telefone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listOrganizadores}</TableBody>
        </Table>
      </TableContainer>
      <h1></h1>
      <Button fullWidth variant="contained" component={Link} to="/">
        Voltar para Home
      </Button>
    </div>
  );
}

export default Organizadores;

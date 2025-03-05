import { Link } from "react-router-dom";
import {Button} from "@mui/material";


function Home(){
    return(
        <div>
            <h1>BEM VINDO AS SISTEMAS DE EVENTOS</h1>
            <h3>Clique aqui para ver os Eventos</h3>
            <Button
      variant="contained"
      component={Link}
      to="/eventos">
        VER EVENTOS
      </Button>
            <h3>Clique aqui para ver os Organizadores</h3>
            <Button
      variant="contained"
      component={Link}
      to="/organizadores">
        VER ORGANIZADORES
      </Button>
            <h3>Clique aqui para ver os Ingressos</h3>
            <Button
      variant="contained"
      component={Link}
      to="/ingresso">
        VER INGRESSOS
      </Button>
        </div>
    )
}

export default Home
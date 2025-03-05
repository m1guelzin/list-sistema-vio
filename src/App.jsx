import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import CriarEvento from "./pages/CriarEvento";
import Organizadores from "./pages/Organizadores";
import Ingressos from "./pages/Ingressos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/organizadores" element={<Organizadores />} />
          <Route path="/criarevento" element={<CriarEvento />} />
          <Route path="/ingresso" element={<Ingressos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

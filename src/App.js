import "./styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import SobreMim from "./Components/SobreMim";
import Habilidades from "./Components/Habilidades";
import Projetos from "./Components/Projetos";
import Contatos from "./Components/Contatos";
import Academicas from "./Components/Academicas";
import Profissionais from "./Components/Profissionais";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<SobreMim />} />
          <Route path="/skills" element={<Habilidades />} />
          <Route path="/projects" element={<Projetos />} />
          <Route path="/academics" element={<Academicas />} />
          <Route path="/professional" element={<Profissionais />} />
        </Routes>
      </Router>
      <Contatos />
    </div>
  );
}

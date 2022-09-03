import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LowIqSpam from "./pages/LowIqSpam";
import Finance from "./pages/sections/Finance";
import Logos from "./pages/sections/Logos";
import EvolutionaryAlgorithms from "./pages/sections/EvolutionaryAlgorithms";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lowiqspam" element={<LowIqSpam />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/logos" element={<Logos />} />
      <Route
        path="/evolutionaryalgorithms"
        element={<EvolutionaryAlgorithms />}
      />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PokemonDetails from "./components/pokemonDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
}

export default App;

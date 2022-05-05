import PokemonFinder from "./pages/PokemonFinder";
import { Routes, Route } from "react-router-dom";
import PokemonGuesser from "./pages/PokemonGuesser";
import Header from "./components/Header";
import Pokerdle from "./pages/Pokerdle";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/find" element={<PokemonFinder />} />
        <Route path="/guess" element={<PokemonGuesser />} />
        <Route path="/pokerdle" element={<Pokerdle />} />
      </Routes>
    </div>
  );
}

export default App;

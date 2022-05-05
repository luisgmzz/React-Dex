import PokemonFinder from "./pages/PokemonFinder";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PokemonGuesser from "./pages/PokemonGuesser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/find" element={<PokemonFinder />} />
        <Route path="/guess" element={<PokemonGuesser />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

import PokemonFinder from "./pages/PokemonFinder";
import { Routes, Route } from "react-router-dom";
import PokemonGuesser from "./pages/PokemonGuesser";
import Header from "./components/Header";
import Pokerdle from "./pages/Pokerdle";
import Footer from "./components/Footer";
import { MainContent, PageWrapper } from "./styles/Wrappers";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <PageWrapper className="App">
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/find" element={<PokemonFinder />} />
          <Route path="/guess" element={<PokemonGuesser />} />
          <Route path="/pokerdle" element={<Pokerdle />} />
        </Routes>
      </MainContent>
      <Footer />
    </PageWrapper>
  );
}

export default App;

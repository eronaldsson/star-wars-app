import { useState } from "react";
import "./App.css";
import CharacterInfoPage from "./components/CharacterInfoPage";
import CharacterListPage from "./components/CharacterListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";

function App() {
  const [character, setCharacter] = useState<string[]>([]);
  const [planetURL, setPlanetURL] = useState<string>("");
  const [starshipURL, setStarshipURL] = useState<string>("");
  const value = {
    character,
    setCharacter,
    planetURL,
    setPlanetURL,
    starshipURL,
    setStarshipURL,
  };

  return (
    <Router>
      <AppContext.Provider value={value}>
        <Routes>
          <Route index path="/" element={<CharacterListPage />} />
          <Route path="/info" element={<CharacterInfoPage />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}
export default App;

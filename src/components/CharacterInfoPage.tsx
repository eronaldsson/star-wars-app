import { useContext } from "react";
import Footer from "../components/Footer";
import Top from "../components/Top";
import CharacterInfo from "./CharacterInfo";
import PlanetInfo from "./PlanetInfo";
import StarshipInfo from "./StarshipInfo";
import { AppContext } from "../context/AppContext";

const CharacterInfoPage = () => {
  const { starshipURL } = useContext(AppContext);

  return (
    <div className="iphone-container">
      <Top showBackArrow={true} />
      <div className="info-container">
        <CharacterInfo />
        <PlanetInfo />
        {starshipURL !== undefined && <StarshipInfo />}
      </div>
      <Footer />
      <div className="rectangle"></div>
    </div>
  );
};

export default CharacterInfoPage;

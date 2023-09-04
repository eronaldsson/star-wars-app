import { useContext } from "react";
import star_wars_image from "../assets/images/star-wars-image.png";
import usePeople from "../hooks/usePeople";
import { AppContext } from "../context/AppContext";

const CharacterInfo = () => {
  const { peopleError } = usePeople();
  const { character } = useContext(AppContext);

  return (
    <>
      {peopleError && <p>{peopleError}</p>}
      <div className="character-info">
        <div className="character-name">{character[0]}</div>
        <img
          className="list-star-wars-image"
          src={star_wars_image}
          alt="star-wars-image"
        />
        <div className="character-gender-birthyear">
          {character[1]} | {character[2]}
        </div>
      </div>
    </>
  );
};

export default CharacterInfo;

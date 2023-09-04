import usePeople from "../hooks/usePeople";
import star_wars_image from "../assets/images/star-wars-image.png";
import right_arrow_icon from "../assets/images/right-arrow-icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PeopleList = () => {
  const { people, peopleError } = usePeople();
  const { setCharacter, setPlanetURL, setStarshipURL } = useContext(AppContext);

  function capitalizeFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  function checkGender(gender: string) {
    return gender !== "n/a" ? capitalizeFirst(gender) : gender;
  }

  return (
    <>
      <div className="list-container">
        {peopleError && <p>{peopleError}</p>}
        {people.map((person) => (
          <div key={person.name} className="list-box">
            <img
              className="list-star-wars-image"
              src={star_wars_image}
              alt="star-wars-image"
            />
            <div className="character-box">
              <div className="character-name">{person.name}</div>
              <div className="character-gender-birthyear">
                {checkGender(person.gender)} | {person.birth_year}
              </div>
            </div>
            <Link
              to="/info"
              className="right-arrow-icon"
              onClick={() => {
                setCharacter([
                  person.name,
                  checkGender(person.gender),
                  person.birth_year,
                ]);
                setPlanetURL(person.homeworld);
                setStarshipURL(person.starships[0]);
              }}
            >
              <img src={right_arrow_icon} alt="right-arrow-icon" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PeopleList;

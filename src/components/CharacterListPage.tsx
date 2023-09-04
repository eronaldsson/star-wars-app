import Footer from "../components/Footer";
import PeopleList from "../components/PeopleList";
import Top from "../components/Top";

const CharacterListPage = () => {
  return (
    <>
      <div className="iphone-container">
        <Top showBackArrow={false} />
        <div className="list-title">Characters in StarWars</div>
        <PeopleList />
        <Footer />
        <div className="rectangle"></div>
      </div>
    </>
  );
};

export default CharacterListPage;

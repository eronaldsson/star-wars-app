import useStarships from "../hooks/useStarships";

const StarshipInfo = () => {
  const { starships, starshipError } = useStarships();

  return (
    <>
      {starshipError && <p>{starshipError}</p>}
      <div className="info-box">
        <div>Starships</div>
        <div className="info-box">
          <div className="info-line">
            <div className="info-key">Home Planet</div>
            <div className="info-value">{starships?.name}</div>
          </div>
          <div className="info-line">
            <div className="info-key">Model</div>
            <div className="info-value">{starships?.model}</div>
          </div>
          <div className="info-line">
            <div className="info-key">Manufacturer</div>
            <div className="info-value">{starships?.manufacturer}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarshipInfo;

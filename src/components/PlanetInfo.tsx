import usePlanets from "../hooks/usePlanets";

const PlanetInfo = () => {
  const { planets, planetError } = usePlanets();

  return (
    <>
      {planetError && <p>{planetError}</p>}
      <div className="info-box">
        <div>Planets</div>
        <div className="info-box">
          <div className="info-line">
            <div className="info-key">Home Planet</div>
            <div className="info-value">{planets?.name}</div>
          </div>
          <div className="info-line">
            <div className="info-key">Rotation Period</div>
            <div className="info-value">{planets?.rotation_period}</div>
          </div>
          <div className="info-line">
            <div className="info-key">Population</div>
            <div className="info-value">{planets?.population}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetInfo;

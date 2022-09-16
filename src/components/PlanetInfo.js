import InfoCards from "./InfoCards";

const PlanetInfo = ({ planet }) => {
  return (
    <div>
      <div className="planet">
        <img className="planet-image" src={planet.image} />
        <div className="main">
          <div className="title">
            <h2 className={`planet${planet.id}`}>{planet.name}</h2>
            <h3>
              <span className={`planet${planet.id}`}>TYPE: </span>
              {planet.geography}
            </h3>
          </div>
          <p className="planet-resume">{planet.resume}</p>
        </div>
      </div>

      {planet.features ? <InfoCards planet={planet} /> : "Sem Informação"}
    </div>
  );
};

export default PlanetInfo;

import "./InfoCards.css";

const InfoCards = ({ planet }) => {
  const showInfo = (info) => {
    return info >= 0 || info ? info : "?";
  };

  console.log();

  return (
    <div className="info-cards-container">
      {planet.name !== "Sol" ? (
        <div className="info-card">
          <h4 className={`planet${planet.id}`}>DIST.DO SOL</h4>
          <h5>{showInfo(planet.features.sunDistance)}</h5>
        </div>
      ) : (
        ""
      )}
      {planet.name !== "Sol" ? (
        <div className="info-card">
          <h4 className={`planet${planet.id}`}>DUR. DE UM ANO</h4>
          <h5>{showInfo(planet.features.orbitalPeriod[0])}</h5>
        </div>
      ) : (
        ""
      )}

      <div className="info-card">
        <h4 className={`planet${planet.id}`}>DUR. DE UM DIA</h4>
        <h5>{showInfo(planet.features.rotationDuration)}</h5>
      </div>
      <div className="info-card">
        <h4 className={`planet${planet.id}`}>TEMPERATURA</h4>
        <h5>{showInfo(planet.features.temperature)}</h5>
      </div>
      <div className="info-card">
        <h4 className={`planet${planet.id}`}>GRAVIDADE</h4>
        <h5>{showInfo(planet.features.gravity)}</h5>
      </div>
      {planet.name !== "Sol" ? (
        <div className="info-card">
          <h4 className={`planet${planet.id}`}>TIPO</h4>
          <h5>{showInfo(planet.type)}</h5>
        </div>
      ) : (
        ""
      )}
      {planet.name !== "Sol" ? (
        <div className="info-card">
          <h4 className={`planet${planet.id}`}>TEMPO VIAGEM DA LUZ</h4>
          <h5>{showInfo(planet.features.oneWayLightToTheSun)}</h5>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoCards;

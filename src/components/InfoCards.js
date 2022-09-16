const InfoCards = ({ planet }) => {
  console.log(planet);

  const showInfo = (info) => {
    return info ? info : "?";
  };

  return (
    <div className="info-cards">
      <div className="info-card">
        <h4>DISTÂNCIA DO SOL</h4>
        <h5>{showInfo(planet.features.sunDistance)}</h5>
      </div>
      <div className="info-card">
        <h4>TEMPO PARA A LUZ DO SOL CHEGAR</h4>
        <h5>{showInfo(planet.features.oneWayLightToTheSun)}</h5>
      </div>
      <div className="info-card">
        <h4>DURAÇÃO DE UM ANO</h4>
        <h5>{planet.features.orbitalPeriod[0]}</h5>
      </div>
      <div className="info-card">
        <h4>DURAÇÃO DE UM DIA</h4>
        <h5>{planet.features.rotationDuration}</h5>
      </div>
      <div className="info-card">
        <h4>TEMPERATURA</h4>
        <h5>{planet.features.temperature}</h5>
      </div>
      <div className="info-card">
        <h4>GRAVIDADE</h4>
        <h5>{planet.features.gravity}</h5>
      </div>
      <div className="info-card">
        <h4>LUAS</h4>
        <h5>{planet.features.satellites.number}</h5>
      </div>
    </div>
  );
};

export default InfoCards;

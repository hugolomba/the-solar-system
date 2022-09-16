import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfoCards from "../components/InfoCards";

const Planet = () => {
  const [planet, setPlanet] = useState({});
  const planetId = useParams();

  useEffect(() => {
    axios
      .get(`https://api-solar-system.herokuapp.com/planet/${planetId.planeta}`)
      .then((response) => {
        console.log(response.data);
        setPlanet(response.data);
      })
      .catch((error) => console.log(error));
  }, [planetId]);

  let foward = parseInt(planetId.planeta) + 1;
  let back = parseInt(planetId.planeta) - 1;

  // if (foward < 0) {
  //   foward + 1;
  // }

  // console.log(foward, back);
  console.log(planet);

  return (
    <div className="planet-container">
      <div className="planet">
        <div className="seta earth">
          <Link to={`/${back}`}>
            <MdOutlineArrowBackIosNew />
          </Link>
        </div>
        <img className="planet-image" src={planet.image} />
        <div className="main">
          <div className="title">
            <h2>{planet.name}</h2>
            <h3>
              <span className="earth">TYPE: </span>
              {planet.geography}
            </h3>
          </div>
          <p className="planet-resume">{planet.resume}</p>
        </div>
        <div className="seta earth">
          <Link to={`/${foward}`}>
            <MdArrowForwardIos />
          </Link>
        </div>
      </div>

      {planet.features ? (
        <InfoCards planet={planet} />
      ) : (
        <div>Sem informação</div>
      )}

      {/* <div className="info-cards">
        <div className="info-card">
          <h4>DISTÂNCIA DO SOL</h4>
          <h5>{planet.features.sunDistance}</h5>
        </div>
        <div className="info-card">
          <h4>TEMPO PARA A LUZ DO SOL CHEGAR</h4>
          <h5>{planet.features.oneWayLightToTheSun}</h5>
        </div>
        <div className="info-card">
          <h4>DURAÇÃO DE UM ANO</h4>
          <h5>{planet.features.orbitalPeriod}</h5>
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
      </div> */}
    </div>
  );
};

export default Planet;

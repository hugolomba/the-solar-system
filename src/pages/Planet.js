import earth from "../img/planets/earth.png";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FcNext } from "react-icons/fc";
import { MdOutlineNavigateNext } from "react-icons/md";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

const Planet = () => {
  const [planet, setPlanet] = useState([]);
  const planetId = useParams();

  useEffect(() => {
    axios
      .get(`https://api-solar-system.herokuapp.com/planet/${planetId.planeta}`)
      .then((response) => {
        setPlanet(response.data);
      });
  }, []);

  return (
    <div className="planet-container">
      <div className="planet">
        <div className="seta earth">
          <MdOutlineArrowBackIosNew />
        </div>
        <img className="planet-image" src={planet.imageTwo || ""} />
        <div className="main">
          <div className="title">
            <h2>{planet.name}</h2>
            <h3>
              <span className="earth">TYPE: </span>
              {planet.geography}
            </h3>
          </div>
          <p className="planet-resume">{planet.resume}</p>
          {/* <div className="info-cards2 earth">
            <div className="info-card">
              <h4>DISTANCE FROM THE SUN</h4>
              <h5>~ 150.000.000 Km</h5>
            </div>
            <div className="info-card">
              <h4>LENGHT OF YEAR</h4>
              <h5>365.25 DAYS</h5>
            </div>
            <div className="info-card">
              <h4>TEMPERATURE</h4>
              <h5>15 C</h5>
            </div>
            <div className="info-card">
              <h4>GRAVITY</h4>
              <h5>9.807 m/s</h5>
            </div>
            <div className="info-card">
              <h4>MOONS</h4>
              <h5>1</h5>
            </div>
          </div> */}
        </div>
        <div className="seta earth">
          <MdArrowForwardIos />
        </div>
      </div>
      <div className="info-cards">
        <div className="info-card">
          <h4>DISTÂNCIA DO SOL</h4>
          <h5>{planet.features.sunDistance && planet.features.sunDistance}</h5>
        </div>
        <div className="info-card">
          <h4>TEMPO PARA A LUZ DO SOL CHEGAR</h4>
          <h5>
            {planet.features.oneWayLightToTheSun || "Informação não encontrada"}
          </h5>
        </div>
        <div className="info-card">
          <h4>DURAÇÃO DE UM ANO</h4>
          <h5>
            {planet.features.orbitalPeriod || "Informação não encontrada"}
          </h5>
        </div>
        <div className="info-card">
          <h4>DURAÇÃO DE UM DIA</h4>
          <h5>
            {planet.features.rotationDuration || "Informação não encontrada"}
          </h5>
        </div>
        <div className="info-card">
          <h4>TEMPERATURA</h4>
          <h5>{planet.features.temperature || "Informação não encontrada"}</h5>
        </div>
        <div className="info-card">
          <h4>GRAVIDADE</h4>
          <h5>{planet.features.gravity || "Informação não encontrada"}</h5>
        </div>
        <div className="info-card">
          <h4>LUAS</h4>
          <h5>
            {planet.features.satellites.number || "Informação não encontrada"}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Planet;

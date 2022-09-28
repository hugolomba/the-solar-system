import "../style/app.css";
// import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Dock from "../components/Dock";

import planetsImages from "../planetsImages.json";

import { Link } from "react-router-dom";

const Home = (props) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-solar-system.herokuapp.com/planets")
      .then((response) => {
        setPlanets(response.data);
      });
  }, []);

  const translateName = (name) => {
    switch (name) {
      case "Sol":
        return "sun";
        break;
      case "Mercúrio":
        return "mercury";
        break;
      case "Vênus":
        return "venus";
        break;
      case "Terra":
        return "earth";
        break;
      case "Marte":
        return "mars";
        break;
      case "Júpiter":
        return "jupiter";
        break;
      case "Saturno":
        return "saturn";
        break;
      case "Urano":
        return "uranus";
        break;
      case "Netuno":
        return "neptune";
        break;
      case "Plutão":
        return "pluto";
        break;
    }
  };
  return (
    <div className="home-container">
      <p>
        Bom vindo ao The Solar System, aqui você encontra informações e
        curiosidades sobre o nosso sistema solar.
      </p>
      <div className="imagens-container">
        {/* {planets &&
          planets.map((planet) => {
            return (
              <div className={`${translateName(planet.name)} planeta`}>
                <img src={planet.images.png} />{" "}
              </div>
            );
          })} */}
        {/* 
        {planets &&
          planetsImages.map((planet) => {
            return (
              <Link to={`/planeta/${planet.id}`}>
                <div className={`${planet.planet} planeta`}>
                  <img src={planet.image} />{" "}
                </div>
              </Link>
            );
          })} */}

        <Dock />
      </div>
    </div>
  );
};

export default Home;

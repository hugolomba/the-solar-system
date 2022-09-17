import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfoCards from "../components/InfoCards";
import Loading from "../components/Loading";
import PlanetInfo from "../components/PlanetInfo";
import { Fade, Slide } from "react-awesome-reveal";
import Peso from "../components/Peso";
import ColoredLine from "../components/ColoredLine";

const Planet = () => {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);

  const planetId = useParams();

  console.log("planetID", planetId);
  console.log("planet", planet);

  useEffect(() => {
    axios
      .get(`https://api-solar-system.herokuapp.com/planet/${planetId.planeta}`)
      .then((response) => {
        setPlanet(response.data);
      })
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, [planetId]);

  let foward = parseInt(planetId.planeta) + 1;
  let back = parseInt(planetId.planeta) - 1;

  if (foward > 9) foward = 0;
  if (back < 0) back = 9;

  return (
    <div className="planet-container">
      <div className="seta earth">
        <Link to={`/planeta/${back}`}>
          <MdOutlineArrowBackIosNew className={`planet${planet.id}`} />
        </Link>
      </div>

      {loading ? <Loading /> : <PlanetInfo planet={planet} />}

      <div className="seta earth">
        <Link to={`/planeta/${foward}`}>
          <MdArrowForwardIos className={`planet${planet.id}`} />
        </Link>
      </div>
    </div>
  );
};

export default Planet;

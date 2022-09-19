import "./Planet.css";

import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import PlanetInfo from "../components/PlanetInfo";
import GalleryPage from "../components/GalleryPage";

const Planet = () => {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);

  const planetId = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api-solar-system.herokuapp.com/planet/${planetId.planeta}`)
      .then((response) => {
        setPlanet(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [planetId]);

  let foward = parseInt(planetId.planeta) + 1;
  let back = parseInt(planetId.planeta) - 1;

  if (foward > 9) foward = 0;
  if (back < 0) back = 9;

  return (
    <div className="planet-container">
      <div className="seta">
        <Link className={`planet${planet.id}`} to={`/planeta/${back}`}>
          <MdOutlineArrowBackIosNew />
        </Link>
      </div>

      {loading ? <Loading /> : <PlanetInfo planet={planet} />}

      {/* {planet && <GalleryPage planet={planet} />} */}

      <div className="seta earth">
        <Link className={`planet${planet.id}`} to={`/planeta/${foward}`}>
          <MdArrowForwardIos className={`planet${planet.id}`} />
        </Link>
      </div>
    </div>
  );
};

export default Planet;

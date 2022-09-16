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

  if (foward > 9) foward = 1;
  if (back < 0) back = 9;

  // console.log(foward, back);
  console.log(planet);

  return (
    <div className="planet-container">
      <div className="seta earth">
        <Link to={`/${back}`}>
          <MdOutlineArrowBackIosNew className={`planet${planet.id}`} />
        </Link>
      </div>
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

        {planet.features ? (
          <InfoCards planet={planet} />
        ) : (
          <div>Sem informação</div>
        )}
      </div>
      <div className="seta earth">
        <Link to={`/${foward}`}>
          <MdArrowForwardIos className={`planet${planet.id}`} />
        </Link>
      </div>
    </div>
  );
};

export default Planet;

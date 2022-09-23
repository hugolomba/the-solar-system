import "./Dock.css";

import planetsImages from "../planetsImages.json";
import { Link } from "react-router-dom";

const Dock = () => {
  return (
    <div id="dock-container">
      {/* <div id="dock"> */}
      <ul>
        {planetsImages.map((planet) => {
          return (
            <li>
              <Link to={`/planeta/${planet.id}`}>
                <div className={`${planet.planet} planeta`}>
                  <img src={planet.image} />{" "}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Dock;

import "./PlanetInfo.css";
import Buttons from "./Buttons";
import InfoCards from "./InfoCards";

import { Suspense } from "react";

const PlanetInfo = ({ planet }) => {
  return (
    <div>
      {/* <Slide> */}
      <div className="planet">
        <div className="planet-image-container">
          <Suspense>
            <img className="planet-image" src={planet.images.png} />
          </Suspense>
        </div>

        <div className="main">
          <div className="main-info">
            <div className="title">
              <h2 className={`planet${planet.id}`}>{planet.name}</h2>
              {planet.name === "Sol" ? (
                ""
              ) : (
                <h3>
                  <span className={`planet-type-span planet${planet.id}`}>
                    LUAS:{" "}
                  </span>
                  {planet.features.satellites.number ||
                  planet.features.satellites.number >= 0
                    ? planet.features.satellites.number
                    : "???"}
                </h3>
              )}
            </div>
            <p className="planet-resume">
              {planet.resume || planet.resume.length > 0
                ? planet.resume
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan sapien metus, quis scelerisque lectus porttitor ullamcorper. Vivamus in semper arcu. Pellentesque eros justo, venenatis eget aliquet vitae, molestie sed mauris. Quisque consectetur, tellus id hendrerit condimentum, sem magna gravida justo, in congue est tellus id massa. Cras sagittis augue sed congue fermentum. Nunc consequat nisi erat, ut finibus ex molestie malesuada. Sed laoreet sapien et egestas ultrices. Phasellus lobortis ultrices vestibulum. Ut ac consequat lacus. Ut vel elit vel nisi tempor iaculis. Sed at consequat lacus, et condimentum lorem. Sed cursus mollis massa eu bibendum. Sed venenatis justo non bibendum congue. Suspendisse potenti.Vestibulum venenatis enim vel odio condimentum tempus id a neque. Quisque et vehicula est, eu mattis quam. Sed rhoncus erat ut molestie consectetur. Proin sit amet ipsum luctus, lobortis turpis nec, consequat ex."}
            </p>
            <div className="adicional-info">
              {planet.features ? (
                <InfoCards planet={planet} />
              ) : (
                "Sem Informação"
              )}
            </div>
          </div>

          {planet.features ? <Buttons planet={planet} /> : "Sem Informação"}
        </div>
      </div>
      {/* </Slide> */}
    </div>
  );
};

export default PlanetInfo;

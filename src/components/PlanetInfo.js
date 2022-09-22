import "./PlanetInfo.css";
import Buttons from "./Buttons";
import InfoCards from "./InfoCards";
import errorImg from "../img/error-img.gif";
import teste from "../img/planets/pluto.png";

import planetsImages from "../planetsImages.json";

// planetsImages.map((planet) => {
//   return {import planet.name }
// })

import { Suspense } from "react";

// const planetsImages = [
//   {
//     planet: "sun",
//     image: "../img/planets/sun.png",
//   },

//   {
//     planet: "mercury",
//     image: "../img/planets/mercury.png",
//   },

//   {
//     planet: "venus",
//     image: "./img/planets/venus.png",
//   },

//   {
//     planet: "earth",
//     image: "./img/planets/earth.png",
//   },

//   {
//     planet: "mars",
//     image: "./img/planets/mars.png",
//   },

//   {
//     planet: "jupiter",
//     image: "./img/planets/jupiter.png",
//   },

//   {
//     planet: "saturn",
//     image: "./img/planets/saturn.png",
//   },

//   {
//     planet: "uranus",
//     image: "./img/planets/uranus.png",
//   },

//   {
//     planet: "neptune",
//     image: "./img/planets/neptune.png",
//   },

//   {
//     planet: "pluto",
//     image: "./img/planets/pluto.png",
//   },
// ];

const PlanetInfo = ({ planet }) => {
  const image = "../img/planets/pluto.png";

  return (
    <div>
      {/* <Slide> */}
      <div className="planet">
        <div className="planet-image-container">
          {/* <Suspense> */}
          {/* <img
              className="planet-image"
              src={planet.images.png}
              alt="planet image"
              onError={(e) => (e.currentTarget.src = errorImg)}
            /> */}

          {planetsImages.map((p) => {
            if (planet.id === p.id) {
              return (
                <img
                  className="planet-image"
                  src={p.image}
                  alt="planet image"
                  onError={(e) => (e.currentTarget.src = errorImg)}
                />
              );
            }
          })}
          {/* </Suspense> */}
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

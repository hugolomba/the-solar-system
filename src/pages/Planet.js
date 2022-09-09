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

const Planet = () => {
  return (
    <div className="planet-container">
      <div className="planet">
        <div className="seta earth">
          <MdOutlineArrowBackIosNew />
        </div>
        <img className="planet-image" src={earth} />
        <div className="main">
          <div className="title">
            <h2>
              Earth <span className="earth">♁</span>
            </h2>
            <h3>
              <span className="earth">TYPE: </span>Terrestrial
            </h3>
          </div>

          <p className="planet-resume">
            Our home planet is the third planet from the Sun, and the only place
            we know of so far that’s inhabited by living things. While Earth is
            only the fifth largest planet in the solar system, it is the only
            world in our solar system with liquid water on the surface. Just
            slightly larger than nearby Venus, Earth is the biggest of the four
            planets closest to the Sun, all of which are made of rock and metal.
            The name Earth is at least 1,000 years old. All of the planets,
            except for Earth, were named after Greek and Roman gods and
            goddesses. However, the name Earth is a Germanic word, which simply
            means “the ground.”
          </p>
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
      </div>
    </div>
  );
};

export default Planet;

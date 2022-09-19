import "./Buttons.css";
import { useState } from "react";
import Peso from "./Peso";
import Age from "./Age";
import GalleryPage from "./GalleryPage";

const findWord = (planetName) => {
  if (planetName === "Terra") {
    return "na";
  } else if (planetName === "Sol") {
    return "no";
  } else {
    return "em";
  }
};

const Buttons = ({ planet }) => {
  const [showWeight, setShowWeight] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const clickHandler = (e) => {
    if (e.target.name === "weigthButton") setShowWeight(!showWeight);
    if (e.target.name === "ageButton") setShowAge(!showAge);
    if (e.target.name === "galleryButton") setShowGallery(!showGallery);
    if (!e.target.name) {
      setShowWeight(false);
      setShowAge(false);
      setShowGallery(false);
    }
    console.log(e.target.name);
  };

  return (
    <div className={`btn-container planet${planet.id}`}>
      {planet.name !== "Terra" ? (
        <button className="btn" name="weigthButton" onClick={clickHandler}>
          Quando você pesaria {findWord(planet.name)} {planet.name}?
        </button>
      ) : (
        ""
      )}

      {planet.name === "Terra" || planet.name === "Sol" ? (
        ""
      ) : (
        <button className="btn" name="ageButton" onClick={clickHandler}>
          Qual seria sua idade {findWord(planet.name)} {planet.name}?
        </button>
      )}

      <button className="btn" name="galleryButton" onClick={clickHandler}>
        Galeria de imagens da NASA
      </button>

      {planet.features && showWeight ? (
        <Peso clickHandler={clickHandler} planet={planet} />
      ) : (
        ""
      )}

      {planet.features && showAge ? (
        <Age clickHandler={clickHandler} planet={planet} />
      ) : (
        ""
      )}

      {planet.features && showGallery ? (
        <GalleryPage clickHandler={clickHandler} planet={planet} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Buttons;

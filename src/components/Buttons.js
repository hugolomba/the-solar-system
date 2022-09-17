import { useState } from "react";
import Peso from "./Peso";

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

  const clickHandler = () => {
    setShowWeight(!showWeight);
  };

  return (
    <div className={`btn-container planet${planet.id}`}>
      <button className="btn" onClick={clickHandler}>
        Quando você pesaria {findWord(planet.name)} {planet.name}?
      </button>
      <button className="btn">
        Qual seria sua idade {findWord(planet.name)} {planet.name}?
      </button>
      <button className="btn">Galeria de imagens da NASA</button>

      {planet.features && showWeight ? (
        <Peso clickHandler={clickHandler} planet={planet} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Buttons;

import "../components/Peso.css";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const findWord = (planetName) => {
  if (planetName === "Terra") {
    return "na";
  } else if (planetName === "Sol") {
    return "no";
  } else {
    return "em";
  }
};

// const calcPeso = (e) => {};

const Peso = ({ planet, clickHandler }) => {
  const [peso, setPeso] = useState(0);
  const [pesoConvertido, setPesoConvertido] = useState();

  const calcPeso = () => {
    // PESO = MASSA * GRAVIDADE
    // O que vemos na balança é a massa, o peso é em Newtons
    let pesoN = peso * 1.6;
    let convert = pesoN / 9.8;
    setPesoConvertido(convert);
    // setPeso(0);
  };

  return (
    <div className={`peso-container`}>
      <AiFillCloseCircle onClick={clickHandler} />
      <h2 className={`planet${planet.id}`}>
        Qual seria o Seu peso {findWord(planet.name)} {planet.name}?
      </h2>

      <label for="peso-terra">Peso na Terra</label>
      <input
        type="number"
        id="peso-terra"
        onChange={(e) => {
          setPeso(e.target.value);
        }}
      />
      {console.log(peso)}
      <button onClick={calcPeso}>Converter</button>
      {pesoConvertido && (
        <p>
          Se você estivesse {findWord(planet.name)} {planet.name}, seu peso
          seria: {pesoConvertido.toFixed(2)} Kg.
        </p>
      )}

      <p>Explicação</p>
    </div>
  );
};

export default Peso;

import "../components/Age.css";
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

// const calcidade = (e) => {};

const Age = ({ planet, clickHandler }) => {
  const [idade, setIdade] = useState();
  const [idadeConvertida, setidadeConvertida] = useState();

  const handleCalcIdade = () => {
    let planetYear = parseFloat(
      planet.features.orbitalPeriod[1].slice(0, -5).replace(",", ".")
    );

    let idadeN = 1 / planetYear;
    let convert = idadeN * idade;
    setidadeConvertida(convert);

    console.log(planetYear, idadeN, convert);

    // setidade(0);
  };

  const handleReset = () => {
    setIdade("");
    setidadeConvertida(0);
  };

  return (
    <div className="idade-bg">
      <div className={`idade-container planet${planet.id}`}>
        <AiFillCloseCircle name="closeButton" onClick={clickHandler} />

        <h2 className={`planet${planet.id}`}>
          Qual seria a sua idadee {findWord(planet.name)} {planet.name}?
        </h2>
        <div className="convert-container">
          <label for="idade-terra">Insira sua idadee na Terra</label>
          <input
            type="number"
            id="idade-terra"
            value={idade}
            placeholder="valor em anos"
            onChange={(e) => {
              setIdade(e.target.value);
              console.log("target.value: ", e.target.value);
              console.log("idade enquanto muda: ", idade);
            }}
          />
          <div className="btn-convert-container">
            <button className="convert-btn" onClick={handleCalcIdade}>
              Converter
            </button>
            <button className="convert-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <div className="convert-result">
          <p>
            Se você estivesse {findWord(planet.name)} {planet.name}, sua idadee
            seria:
          </p>
          <p>
            {idadeConvertida
              ? `${idadeConvertida.toFixed(2)} ano${
                  idadeConvertida > 1 ? "s" : ""
                }*`
              : "???"}
          </p>
        </div>

        {/* <div className="explication-container">
        <h4>idade = massa x gravidadee</h4>
        <p>
          OBS: O que popularmente entendemos como idade e medimos em Kg, é na
          realidadee a massa.
          O resultado aqui é 
        </p>
      </div> */}

        <p>
          <small>
            Os valores apresentados aqui são feitos com cáculos simples e sem
            supervisão ciêntífica, apenas para fins de entretenimento e
            curiosidade.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Age;

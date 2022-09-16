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
  return (
    <div className={`btn-container planet${planet.id}`}>
      <button className="btn">
        Quando você pesaria {findWord(planet.name)} {planet.name}?
      </button>
      <button className="btn">
        Qual seria sua idade {findWord(planet.name)} {planet.name}?
      </button>
      <button className="btn">Galeria de imagens da NASA</button>
    </div>
  );
};

export default Buttons;

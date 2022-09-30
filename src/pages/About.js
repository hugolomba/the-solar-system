import "./About.css";
import gabriel from "../img/gabriel.png";
import hugo from "../img/hugo.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiNasa, SiReact } from "react-icons/si";
import { GiSolarSystem } from "react-icons/gi";

const About = () => {
  return (
    <div className="about">
      <h2> About Project</h2>
      <p>
        The solar system foi inspirado na nossa paixão pelo universo e por tudo
        que ainda temos a explorar. Nosso objetivo é trazer informações de forma
        criativa e divertida.
      </p>
      <h2> Tecnologias</h2>
      <div className="about-tec">
        <a href="https://reactjs.org/">
          <SiReact />{" "}
        </a>

        <a href="https://api.nasa.gov/">
          {" "}
          <SiNasa />
        </a>

        <a href="https://github.com/leovargasdev/api-solar-system">
          <GiSolarSystem />
        </a>
      </div>
      <h2> Funcionalidades</h2>
      <ul>
        <li>
          Informações sobre cada planeta do sistema solar, incluindo Plutão e o
          Sol.
        </li>
        <li>
          Interações para calcular peso e idade em cada planeta (com base nos
          valores de Gravidade e Período Orbital de cada planeta), com base nas
          informações recebidas da API Solar System
        </li>
        <li>
          Galeria de Imagens criada dinâmicamente através da API NASA Image and
          Video Library
        </li>
      </ul>

      <h2>Desenvolvedores</h2>
      <div className="dev-container">
        <div className="dev">
          <img src={gabriel} />
          <p> Gabriel Oliveira </p>
          <div className="contacts">
            <a
              href="https://www.linkedin.com/in/gabriel-do-carmo-oliveira-69193483/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/GabrielOliver07" target="_blank">
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="dev">
          <img src={hugo} />
          <p> Hugo Lomba </p>
          <div className="contacts">
            <a href="https://www.linkedin.com/in/hugolomba/" target="_blank">
              <BsLinkedin />
            </a>
            <a href="https://github.com/hugolomba" target="_blank">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>

      <p></p>
    </div>
  );
};

export default About;

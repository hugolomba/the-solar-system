import "./About.css";
import gabriel from "../img/gabriel.png";
import hugo from "../img/hugo.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const About = () => {
    return (
        <div className="about">
            <h2> The solar system</h2>
            <p>
                The solar system foi inspirado na nossa paixão pelo universo e por tudo que ainda temos a explorar. Nosso objetivo é trazer informações confiáveis de forma criativa e divertida. Gostaríamos de passar para cada um de vocês uma breve experiência navegando pelos planetas do nosso sistema solar. Desejamos a todos “uma vida longa e prospera”!
            </p>
            <h2> Technologies</h2>
            <p>Utilizamos principalmente o react e duas APIs sendo uma delas da própria NASA.</p>

            <h2>Desenvolvedores</h2>
            <div className="dev-container">
                <div className="dev">
                    <img src={gabriel} />
                    <p> Gabriel Oliveira </p>
                    <div className="contacts">
                        <a href="https://www.linkedin.com/in/gabriel-do-carmo-oliveira-69193483/" target="_blank"><BsLinkedin /></a>
                        <a href="https://github.com/GabrielOliver07" target="_blank"><BsGithub /></a>
                    </div>
                </div>

                <div className="dev">
                    <img src={hugo} />
                    <p> Hugo Lomba </p>
                    <div className="contacts">
                        <a href="https://www.linkedin.com/in/hugolomba/" target="_blank"><BsLinkedin /></a>
                        <a href="https://github.com/hugolomba" target="_blank"><BsGithub /></a>
                    </div>
                </div>

            </div>

            <p></p>
        </div>
    );
};

export default About;
import "./About.css";
import gabriel from "../img/gabriel.png";
import hugo from "../img/hugo.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const About = () => {
    return (
        <div className="about">
            <h1 >Sobre</h1>
            <h2> titulo</h2>
            <p>descrião do Projeto</p>

            <h2>Desenvolvedores</h2>
            <div className="dev-container">
                <div className="dev">
                    <img src={gabriel} />
                    <p> Gabriel Oliveira </p>
                    <div className="contacts">
                        <BsLinkedin />
                        <BsGithub />
                    </div>
                </div>

                <div className="dev">
                    <img src={hugo} />
                    <p> Hugo Lomba </p>
                    <div className="contacts">
                        <BsLinkedin />
                        <BsGithub />
                    </div>
                </div>

            </div>

            <p></p>
        </div>
    );
};

export default About;
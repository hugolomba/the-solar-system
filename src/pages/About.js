import "./About.css";
import gabriel from "../img/gabriel.png";
import hugo from "../img/hugo.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const About = () => {
    return (
        <div className="about">
            <h2> The solar system</h2>
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>

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
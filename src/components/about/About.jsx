import "../about/About.css";
import { useState } from "react";
import useTypewriter from "../hooks/useTypeWriter";

const About = () => {
  const [skip, setSkip] = useState(false);
  const text = `¡Hola! Soy Brian Silvero.<br><br>

Estudiante de la Tecnicatura Universitaria en Programación (UTN), con interés en el desarrollo web, el backend y el análisis de datos.<br><br>

Trabajo con HTML, CSS, JavaScript, React, Python, SQL y Power BI. Combino mi formación académica con proyectos personales para seguir creciendo como Desarrollador Junior.<br><br>

Me considero una persona curiosa, responsable y orientada al aprendizaje continuo. Disfruto resolver problemas, crear soluciones simples y efectivas, y mejorar un poco cada día.<br><br>

Mi objetivo es incorporarme a un equipo IT donde pueda aportar valor, aprender de la experiencia real y participar en proyectos que generen impacto.<br><br>

Gracias por visitar mi portfolio.
`;

  const typewriterElement = useTypewriter(text, 30, skip);

  return (
    <div id="about" className="about">
      <div className="about-titulo">
        <h2>Sobre mí</h2>
      </div>
      <div className="about-seccion">
        <div className="about-seccion-parrafo">{typewriterElement}</div>
        <div className="about-seccion-button">
          <button onClick={() => setSkip(true)} className="retro-button">
            Omitir
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

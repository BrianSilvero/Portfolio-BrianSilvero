import "../about/About.css";
import { useState } from "react";
import useTypewriter from "../hooks/useTypeWriter";

const About = () => {
  const [skip, setSkip] = useState(false);
  const text = `¡Hola! Bienvenidos a mi portfolio <br><br> Soy estudiante de Ingeniería en Sistemas Informáticos, enfocado en ingresar al mundo de la programación y desarrollar habilidades tecnológicas. Actualmente, complemento mi formación con la carrera de Desarrollador Full-Stack en CoderHouse.
  <br><br>
  Además de mi educación formal, he ampliado mis conocimientos de forma autodidacta, leyendo documentación y viendo videos de programadores experimentados. Mi objetivo es convertirme en un profesional en el desarrollo de aplicaciones web.
  <br><br>
  Tengo experiencia en programación con HTML, CSS, y JavaScript, y manejo frameworks y bibliotecas como React JS y Node.js. He obtenido los siguientes certificados en CoderHouse:
  <br><br>
  - Data Analytics: MICROSOFT SQL SERVER, POWER BI y EXCEL
  <br>
  - Desarrollador Web: HTML, CSS, SASS, BOOSTRAP, GIT, GITHUB.
  <br>
  - JavaScript.
  <br>
  - React-JS (En curso)
  <br><br>
  Estoy dispuesto a contribuir en proyectos innovadores, aportando mis conocimientos y aprendiendo continuamente en el campo de la programación.
  <br><br>
  Gracias por visitar mi portfolio. Estoy disponible para colaborar en tus proyectos.`;

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

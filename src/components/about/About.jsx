import "../about/About.css";
import { useState } from 'react';
import useTypewriter from '../hooks/useTypeWriter'; 


const About = () => {
  const [skip, setSkip] = useState(false);
  const text = `Hola! Bienvenidos a mi portfolio. <br><br> Soy un estudiante apasionado de la carrera de ingeniería en sistemas informáticos, dedicado a insertarme en el mundo de la programación y desarrollar habilidades en el ámbito tecnológico. Actualmente en paralelo estoy haciendo la carrera de Desarrollador Full-Stack en la plataforma de Coder-House. Mi objetivo es convertirme en un profesional altamente competente en el desarrollo de aplicaciones web y móviles. A través de un constante aprendizaje y práctica, estoy adquiriendo conocimientos de programación como HTML, CSS, JavaScript, así como en frameworks y bibliotecas populares como React y Node.js. Estoy emocionado por contribuir en proyectos innovadores, colaborar con equipos multidisciplinarios y enfrentar nuevos desafíos tecnológicos que me permitan seguir creciendo y destacándome en el campo de la programación.`;

  const typewriterElement = useTypewriter(text, 30, skip);

  return (
    <div id="about" className="about">
      <div className="about-titulo">
        <h2>Sobre mí</h2>
      </div>
      <div className="about-seccion">
        {typewriterElement} 
        <button onClick={() => setSkip(true)}>Omitir</button> {/* Botón para omitir el efecto */}
      </div>
    </div>
  );
};

export default About;
import "../about/About.css";
import {useTypewriter, Cursor} from 'react-simple-typewriter';

const About = () => {

  const [text] = useTypewriter({
    words: ["Hola! Bienvenidos a mi portfolio. Soy un estudiante apasionado de la carrera de ingeniria en sistemas informaticos, dedicado a insertarme en el mundo de la programación y desarrollar habilidades en el ámbito tecnológico. Actualmente en parelelo estoy haciendo la carrera de Desarrollador Full-Stack en la plataforma de Coder-House. Mi objetivo es convertirme en un profesional altamente competente en el desarrollo de aplicaciones web y móviles. A través de un constante aprendizaje y práctica, estoy adquiriendo conocimientos de programación como HTML, CSS, JavaScript, así como en frameworks y bibliotecas populares como React y Node.js. Estoy emocionado por contribuir en proyectos innovadores, colaborar con equipos multidisciplinarios y enfrentar nuevos desafíos tecnológicos que me permitan seguir creciendo y destacándome en el campo de la programación."],
    typeSpeed: 40

  });

  return (
    <div id="about" className="about">
      <div className="about-titulo">
        <h2>Sobre mi</h2>
      </div>
      <div className="about-seccion">
        <p>
         {text}
          <Cursor cursorColor="#96b3ff" cursorStyle='|'/>
        </p>
      </div>
    </div>
  );
};

export default About;

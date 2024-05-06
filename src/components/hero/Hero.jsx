import '../hero/Hero.css'
import Brian from '../../assets/brian_silvero.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='inicio' className='hero'>
      <img className="brian-silvero" src={Brian} alt="BrianSilvero" />
      <h1>Este soy yo! Me presento, <span>Brian Silvero</span> a disposición</h1>
      <p>En esta página podras obtener toda mi información necesaria para que puedas conocerme y contactarme en caso que lo requieras, desde ya muchas gracias por visitar esta página</p>
      <div className='hero-accion'>
        <div className='hero-conectar'><AnchorLink className="anchor-link" offset={65} href="#contacto">Contactate conmigo</AnchorLink></div>
        <div className='hero-resumen'><AnchorLink className="anchor-link" offset={65} href="#about">Mi resumen</AnchorLink></div>
      </div>
    </div>

  )
}

export default Hero

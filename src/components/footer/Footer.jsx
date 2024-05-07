import "../footer/Footer.css";
import logo from "../../assets/logo-portfolio.png";
import user from "../../assets/user.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-izquierda">
          <img src={logo} className="logo_footer" alt="" />
          <p>
            Soy un Desarrollador Full-Stack sin experiencia laboral pero
            dispuesto aprender y aportar mis conocimientos logrados{" "}
          </p>
        </div>
        <div className="footer-top-derecha">
          <div className="footer-email-input">
            <img src={user} className="user_img" alt="usuario" />
            <input type="email" id="email" name="email" placeholder="Ingresa tu mail" autoComplete="email" />
          </div>
          <div className="footer-subcribite">Suscribite</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bootom-izquierda"> © Brian Silvero</p>
        <div className="footer-bottom-derecha">
          <p>Termino de servicios</p>
          <p>Politica de privacidad</p>
          <p>Conectate conmigo</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

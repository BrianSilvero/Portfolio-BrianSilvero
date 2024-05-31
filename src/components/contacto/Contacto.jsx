import "../contacto/Contacto.css";
import email from "../../assets/email.png";
import telefono from "../../assets/telefono.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.svg";
import Swal from "sweetalert2";

const Contacto = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3e0c1242-4147-4c6c-9873-a510c468c0d2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Muchas gracias!",
        text: "Tu mensaje ha sido enviado con exito! ",
        icon: "success",
        buttons: "Aceptar",
      });
    }
  };

  return (
    <div id="contacto" className="conctacto">
      <div className="contacto-titulo">
        <h2>Contactame</h2>
      </div>
      <div className="contacto-seccion">
        <div className="conctacto-izquierda">
          <h2>Hablemos</h2>
          <p>
            Actualmente me encuentro dispuesto asumir nuevos proyectos con el
            fin de aprender y aportar, no dudes en enviarme un mensaje. Puedes
            ponerte en contacto en cualquier momento. Contactame a través de:
          </p>
          <div className="contacto-detalle">
            <img src={telefono} alt="telefono" className="iconos" />{" "}
            <p>(+549) 11 2512-0868</p>
          </div>
          <div className="contacto-detalle">
            <img src={email} alt="email" className="iconos" />{" "}
            <p>briandavidsilvero@gmail.com</p>
          </div>
          <div className="contacto-detalle">
            <img src={linkedin} alt="Linkedin" className="iconos" />
            <a href="https://www.linkedin.com/in/brian-david-silvero/">
              <p>https://www.linkedin.com/in/brian-david-silvero/</p>
            </a>
          </div>
          <div className="contacto-detalle">
            <img src={github} alt="Github" className="iconos" />
            <a href="https://github.com/BrianSilvero">
              <p>https://github.com/BrianSilvero</p>
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contacto-derecha">
          <label htmlFor="name">Tu Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            required
            autoComplete="name"
          />
          <label htmlFor="email">Tu Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu email"
            required
            autoComplete="email"
          />
          <label htmlFor="mensaje">Escribi tu mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="8"
            placeholder="Escribe tu mensaje"
            required
            autoComplete="message"
          ></textarea>
          <button type="submit" className="contacto-enviar">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;

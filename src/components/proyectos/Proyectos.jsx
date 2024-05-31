import mis_proyectos_datos from "../../assets/mis_proyecto_datos";
import "../proyectos/Proyectos.css";

const Proyectos = () => {
  return (
    <div id="proyectos" className="mis-proyectos">
      <div className="mis-proyectos-titulos">
        <h2>Mis ultimos proyectos</h2>
      </div>
      <div className="mis-proyectos-contenedor">
        {mis_proyectos_datos.map((work, index) => {
          return (
            <a key={index} href={work.w_link}>
              <img
                className="img-proyectos"
                key={index}
                src={work.w_img}
                alt=""
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Proyectos;

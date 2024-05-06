import "./NavBar.css";
import logo from "../../assets/logo-portfolio.png";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/flecha.png";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">
      <AnchorLink className="anchor-link" offset={50} href="#inicio">
        <p onClick={() => setMenu("home")}>
          <img src={logo} className="logo" alt="logo-navbar" />
        </p>
      </AnchorLink>

      <img src={menu_open} className="menu_open" onClick={openMenu} alt="" />

      <ul className="nav-menu" ref={menuRef}>
        <img src={menu_close} className="menu_close" onClick={closeMenu} alt="" />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#inicio">
            <p onClick={() => setMenu("home")}>Inicio</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src={underline} className="underline" alt="" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={65} href="#about">
            <p onClick={() => setMenu("sobremi")}>Sobre mi</p>
          </AnchorLink>
          {menu === "sobremi" ? (
            <img src={underline} className="underline" alt="" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={68} href="#proyectos">
            <p onClick={() => setMenu("proyectos")}>Proyectos</p>
          </AnchorLink>
          {menu === "proyectos" ? (
            <img src={underline} className="underline" alt="" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={65} href="#contacto">
            <p onClick={() => setMenu("contacto")}>Contacto</p>
          </AnchorLink>
          {menu === "contacto" ? (
            <img src={underline} className="underline" alt="" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-conectar">
        <AnchorLink className="anchor-link" offset={65} href="#contacto">
          Contactate conmigo
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;

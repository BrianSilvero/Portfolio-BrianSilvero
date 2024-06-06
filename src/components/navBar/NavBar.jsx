import "./NavBar.css";
import logo from "../../assets/logo-portfolio.png";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/flecha.png";
import { useRef, useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenu(""); 
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <AnchorLink className="anchor-link" offset={50} href="#inicio">
        <p onClick={() => setMenu("home")}>
          <img src={logo} className="logo" alt="logo-navbar" />
        </p>
      </AnchorLink>

      <img src={menu_open} className="menu_open" onClick={openMenu} alt="" />

      <ul className="nav-menu" ref={menuRef} onClick={(e) => e.stopPropagation()}>
        <img src={menu_close} className="menu_close" onClick={closeMenu} alt="" />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#inicio">
            <p onClick={() => setMenu("home")}>Inicio</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src={underline} className="underline" alt="" />
          ) : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={78} href="#about">
            <p onClick={() => setMenu("sobremi")}>Sobre mi</p>
          </AnchorLink>
          {menu === "sobremi" ? (
            <img src={underline} className="underline" alt="" />
          ) : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={68} href="#proyectos">
            <p onClick={() => setMenu("proyectos")}>Proyectos</p>
          </AnchorLink>
          {menu === "proyectos" ? (
            <img src={underline} className="underline" alt="" />
          ) : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={75} href="#contacto">
            <p onClick={() => setMenu("contacto")}>Contacto</p>
          </AnchorLink>
          {menu === "contacto" ? (
            <img src={underline} className="underline" alt="" />
          ) : null}
        </li>
      </ul>
      <div className="nav-conectar">
        <AnchorLink className="anchor-link" offset={75} href="#contacto">
          Contactate conmigo
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;
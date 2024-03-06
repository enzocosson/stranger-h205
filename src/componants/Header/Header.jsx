import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

export function Header() {
  const location = useLocation();

  console.log("Rendering Header component...");

  return (
    <div className={`${styles.container__header}`}>
      <div className={`${styles.main}`}>
        <NavLink to="/" className={`${styles.logo}`}>
          <img src="public/images/logo.png" alt="logo" />
        </NavLink>
        <div className={`${styles.nav}`}>
          <NavLink
            to="/presentation"
            className={`${styles.link} ${
              location.pathname === "/presentation" ? styles.activeLink : ""
            }`}
          >
            Présentation
          </NavLink>
          <NavLink
            to="/visite-3d"
            className={`${styles.link} ${
              location.pathname === "/visite-3d" ? styles.activeLink : ""
            }`}
          >
            Visite 3D
          </NavLink>
          <NavLink
            to="/explication"
            className={`${styles.link} ${
              location.pathname === "/explication" ? styles.activeLink : ""
            }`}
          >
            Explication
          </NavLink>
          <NavLink
            to="/demo"
            className={`${styles.link} ${
              location.pathname === "/demo" ? styles.activeLink : ""
            }`}
          >
            Démo
          </NavLink>
          <NavLink
            to="/telechargement"
            className={`${styles.link} ${
              location.pathname === "/telechargement" ? styles.activeLink : ""
            }`}
          >
            Téléchargement
          </NavLink>
        </div>
      </div>
    </div>
  );
}

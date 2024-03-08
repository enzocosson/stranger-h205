import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

export function Header() {
  const location = useLocation();

  console.log("Rendering Header component...");

  return (
    <div className={`${styles.container__header}`}>
      <div className={`${styles.main}`}>
        <NavLink to="/" className={`${styles.logo}`}>
          <img src="images/logo.webp" alt="logo" />
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
            to="/conception"
            className={`${styles.link} ${
              location.pathname === "/conception" ? styles.activeLink : ""
            }`}
          >
            Conception
          </NavLink>
          <NavLink
            to="/avant-apres"
            className={`${styles.link} ${
              location.pathname === "/avant-apres" ? styles.activeLink : ""
            }`}
          >
            Avant/Après
          </NavLink>
          <NavLink
            to="/demo"
            className={`${styles.link} ${
              location.pathname === "/demo" ? styles.activeLink : ""
            }`}
          >
            Démo
          </NavLink>
        </div>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <NavLink
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        exact
        to="/"
      >
        HomePage
      </NavLink>
      <NavLink
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
        to="/movies"
      >
        Movies
      </NavLink>
    </>
  );
}

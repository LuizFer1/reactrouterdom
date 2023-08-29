import MenuLink from "../menulink";
import styles from  "./Menu.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">
          Inicio
        </MenuLink>
        <MenuLink to="/sobremim">
          Sobremim
        </MenuLink>
      </nav>
    </header>
  );
}

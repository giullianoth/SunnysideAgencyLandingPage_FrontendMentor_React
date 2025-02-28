import styles from "./Header.module.css"
import logo from "../../../assets/images/logo.svg"
import hamburgerIcon from "../../../assets/images/icon-hamburger.svg"
import MainMenu from "../../common/MainMenu"
import { useState } from "react"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <h1>Sunnyside</h1>

        <a href="#">
          <img src={logo} alt="Sunnyside" />
        </a>
      </div>

      <nav className={styles.header__navigation}>
        <div className={styles.header__navigationIcon} onClick={() => setOpenMenu(!openMenu)}>
          <img src={hamburgerIcon} alt="Open menu" />
        </div>

        <MainMenu
          addCta={true}
          menuClassName={styles.header__menu + (openMenu ? ` ${styles.header__menuOpen}` : "")}
          menuItemClassName={styles.header__menuItem} />
      </nav>
    </header>
  )
}

export default Header
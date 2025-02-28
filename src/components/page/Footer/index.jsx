import styles from './Footer.module.css'
import logo from "../../../assets/images/logo2.svg"
import MainMenu from '../../common/MainMenu'
import SocialMenu from '../../common/SocialMenu'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__title}>
                <a href="#">
                    <img src={logo} alt="Sunnyside" />
                </a>
            </div>

            <nav className={styles.footer__menu}>
                <MainMenu menuItemClassName={styles.footer__menuItem} />
            </nav>

            <nav className={styles.footer__social}>
                <SocialMenu />
            </nav>

            <div className={styles.footer__attribution}>
                Challenge by <a href="http://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
                Coded by <a href="http://github.com/giullianoth" target="_blank" rel="noopener noreferrer">Giulliano Guimarães</a>
            </div>
        </footer>
    )
}

export default Footer
import { mainMenu } from "../../../defs/definitions"
import MainMenuItem from "../MainMenuItem"
import styles from "./MainMenu.module.css"

const MainMenu = ({ addCta, menuClassName, menuItemClassName }) => {
    return (
        <ul className={styles.mainMenu + (menuClassName ? ` ${menuClassName}` : "")}>
            {mainMenu.map((item, index) => (
                <MainMenuItem
                    key={`main-menu-item-${index + 1}`}
                    className={menuItemClassName}
                    menu={item.menu}
                    url={item.url} />
            ))}

            {addCta && <li><a href="#" className={styles.mainMenu__button + (menuItemClassName ? ` ${menuItemClassName}` : "")}>Contact</a></li>}
        </ul>
    )
}

export default MainMenu
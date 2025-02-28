import styles from './SocialMenu.module.css'
import facebookIcon from "../../../assets/images/icon-facebook.svg"
import instagramIcon from "../../../assets/images/icon-instagram.svg"
import twitterIcon from "../../../assets/images/icon-twitter.svg"
import pinterestIcon from "../../../assets/images/icon-pinterest.svg"
import SocialMenuItem from '../SocialMenuItem'
import { socialMenu } from '../../../defs/definitions'

const icons = [facebookIcon, instagramIcon, twitterIcon, pinterestIcon]

const SocialMenu = () => {
    return (
        <ul className={styles.socialMenu}>
            {socialMenu.map((item, index) => (
                <SocialMenuItem
                    key={`social-menu-item-${index + 1}`}
                    icon={item.icon(icons[index])}
                    platform={item.platform}
                    url={item.url} />
            ))}
        </ul>
    )
}

export default SocialMenu
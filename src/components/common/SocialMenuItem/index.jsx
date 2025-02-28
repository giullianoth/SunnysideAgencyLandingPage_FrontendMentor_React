import styles from './SocialMenuItem.module.css'

const SocialMenuItem = ({ icon, platform, url }) => {
    return (
        <li className={styles.socialItem}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={platform} title={platform} />
            </a>
        </li>
    )
}

export default SocialMenuItem
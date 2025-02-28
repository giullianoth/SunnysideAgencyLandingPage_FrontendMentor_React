import ImgAsBackground from "../ImgAsBackground"
import styles from "./Service.module.css"

const Service = ({ mobileImage, desktopImage, title, text, color }) => {
    const colorTheme = `service${color.charAt(0).toUpperCase() + color.slice(1)}`

    return (
        <article className={`${styles.service} ${styles[colorTheme]}`}>
            <ImgAsBackground mobileImage={mobileImage} desktopImage={desktopImage} alt={title}>
                <div className={styles.service__wrapper}>
                    <header className={styles.service__title}>
                        <h1 className={styles[colorTheme]}>{title}</h1>
                    </header>

                    <p className={`${styles.service__text} ${styles[colorTheme]}`}>{text}</p>
                </div>
            </ImgAsBackground>
        </article>
    )
}

export default Service
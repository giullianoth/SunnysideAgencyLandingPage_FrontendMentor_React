import styles from "./PresentationItem.module.css"

const PresentationItem = ({ mobileImage, desktopImage, title, text, url, color }) => {
    const colorTheme = `presentationItem${color.charAt(0).toUpperCase() + color.slice(1)}`

    return (
        <article className={styles.presentationItem}>
            <div className={`${styles.presentationItem__image} ${styles[colorTheme]}`}>
                <picture>
                    <source media="(min-width: 768px)" srcSet={desktopImage} />
                    <img src={mobileImage} alt={title} />
                </picture>
            </div>

            <div className={styles.presentationItem__info}>
                <header className={styles.presentationItem__title}>
                    <h1>{title}</h1>
                </header>

                <p className={styles.presentationItem__text}>{text}</p>

                <div className={`${styles.presentationItem__cta} ${styles[colorTheme]}`}>
                    <a href={url}>Learn more</a>
                </div>
            </div>
        </article>
    )
}

export default PresentationItem
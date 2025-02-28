import styles from "./ImgAsBackground.module.css"

const ImgAsBackground = ({ children, mobileImage, desktopImage, minWidth, alt }) => {
    return (
        <div className={styles.container}>
            <picture>
                <source media={`(min-width: ${minWidth ? minWidth : "768"}px)`} srcSet={desktopImage} />
                <img src={mobileImage} alt={alt} />
            </picture>

            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    )
}

export default ImgAsBackground
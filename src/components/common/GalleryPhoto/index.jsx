import styles from "./GalleryPhoto.module.css"

const GalleryPhoto = ({ mobilePhoto, desktopPhoto, url }) => {
    return (
        <article className={styles.galleryPhoto}>
            <a href={url}>
                <picture>
                    <source media="(min-width: 768px)" srcSet={desktopPhoto} />
                    <img src={mobilePhoto} alt="Gallery picture" />
                </picture>
            </a>
        </article>
    )
}

export default GalleryPhoto
import GalleryPhoto from "../../common/GalleryPhoto"
import styles from "./Gallery.module.css"
import mobilePhoto1 from "../../../assets/images/mobile/image-gallery-milkbottles.jpg"
import desktopPhoto1 from "../../../assets/images/desktop/image-gallery-milkbottles.jpg"
import mobilePhoto2 from "../../../assets/images/mobile/image-gallery-orange.jpg"
import desktopPhoto2 from "../../../assets/images/desktop/image-gallery-orange.jpg"
import mobilePhoto3 from "../../../assets/images/mobile/image-gallery-cone.jpg"
import desktopPhoto3 from "../../../assets/images/desktop/image-gallery-cone.jpg"
import mobilePhoto4 from "../../../assets/images/mobile/image-gallery-sugar-cubes.jpg"
import desktopPhoto4 from "../../../assets/images/desktop/image-gallery-sugarcubes.jpg"
import { gallery } from "../../../defs/definitions"

const mobileImages = [mobilePhoto1, mobilePhoto2, mobilePhoto3, mobilePhoto4]
const desktopImages = [desktopPhoto1, desktopPhoto2, desktopPhoto3, desktopPhoto4]

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            {gallery.map((photo, index) => (
                <GalleryPhoto
                    key={`gallery-photo-${index + 1}`}
                    mobilePhoto={photo.mobilePhoto(mobileImages[index])}
                    desktopPhoto={photo.desktopPhoto(desktopImages[index])}
                    url={photo.url} />
            ))}
        </section>
    )
}

export default Gallery
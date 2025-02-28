import styles from "./Presentation.module.css"
import mobileImageEgg from "../../../assets/images/mobile/image-transform.jpg"
import desktopImageEgg from "../../../assets/images/desktop/image-transform.jpg"
import mobileImageCup from "../../../assets/images/mobile/image-stand-out.jpg"
import desktopImageCup from "../../../assets/images/desktop/image-stand-out.jpg"
import PresentationItem from "../../common/PresentationItem"
import { presentationList } from "../../../defs/definitions"

const mobileImages = [mobileImageEgg, mobileImageCup]
const desktopImages = [desktopImageEgg, desktopImageCup]

const Presentation = () => {
    return (
        <section className={styles.presentation}>
            {presentationList.map((presentation, index) => (
                <PresentationItem
                    key={`presentation-${index + 1}`}
                    mobileImage={presentation.mobileImage(mobileImages[index])}
                    desktopImage={presentation.desktopImage(desktopImages[index])}
                    title={presentation.title}
                    text={presentation.text}
                    url={presentation.url}
                    color={presentation.color} />
            ))}
        </section>
    )
}

export default Presentation
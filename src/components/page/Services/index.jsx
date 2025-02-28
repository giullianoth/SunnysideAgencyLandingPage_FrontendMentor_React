import styles from "./Services.module.css"
import mobileImageCherry from "../../../assets/images/mobile/image-graphic-design.jpg"
import desktopImageCherry from "../../../assets/images/desktop/image-graphic-design.jpg"
import mobileImageOrange from "../../../assets/images/mobile/image-photography.jpg"
import desktopImageOrange from "../../../assets/images/desktop/image-photography.jpg"
import Service from "../../common/Service"
import { services } from "../../../defs/definitions"

const mobileImages = [mobileImageCherry, mobileImageOrange]
const desktopImages = [desktopImageCherry, desktopImageOrange]

const Services = () => {
    return (
        <section className={styles.services}>
            {services.map((service, index) => (
                <Service
                    key={`service-${index + 1}`}
                    mobileImage={service.mobileImage(mobileImages[index])}
                    desktopImage={service.desktopImage(desktopImages[index])}
                    title={service.title}
                    text={service.text}
                    color={service.color} />
            ))}
        </section>
    )
}

export default Services
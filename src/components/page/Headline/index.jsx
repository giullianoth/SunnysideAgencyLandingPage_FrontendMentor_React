import styles from "./Headline.module.css"
import mobileBackground from "../../../assets/images/mobile/image-header.jpg"
import desktopBackground from "../../../assets/images/desktop/image-header.jpg"
import ImgAsBackground from "../../common/ImgAsBackground"
import arrowDown from "../../../assets/images/icon-arrow-down.svg"

const Headline = () => {
    return (
        <section className={styles.headline}>
            <ImgAsBackground mobileImage={mobileBackground} desktopImage={desktopBackground} minWidth={600} alt="Background">
                <div className={styles.headline__wrapper}>
                    <header className={styles.headline__title}>
                        <h1>We are creatives</h1>
                    </header>

                    <div className={styles.headline__arrow}>
                        <img src={arrowDown} alt="Arrow down" />
                    </div>
                </div>
            </ImgAsBackground>
        </section>
    )
}

export default Headline
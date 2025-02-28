import styles from "./Testimonials.module.css"
import photo1 from "../../../assets/images/image-emily.jpg"
import photo2 from "../../../assets/images/image-thomas.jpg"
import photo3 from "../../../assets/images/image-jennie.jpg"
import Testimonial from "../../common/Testimonial"
import { testimonials } from "../../../defs/definitions"

const images = [photo1, photo2, photo3]

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <div className={styles.testimonials__container}>
                <header className={styles.testimonials__title}>
                    <h1>Client testimonials</h1>
                </header>

                <div className={styles.testimonials__list}>
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={`testimonial-${index + 1}`}
                            avatar={testimonial.avatar(images[index])}
                            name={testimonial.name}
                            role={testimonial.role}
                            testimonial={testimonial.testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
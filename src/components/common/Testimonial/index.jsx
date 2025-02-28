import styles from "./Testimonial.module.css"

const Testimonial = ({ avatar, name, role, testimonial }) => {
    return (
        <article className={styles.testimonial}>
            <div className={styles.testimonial__avatar}>
                <img src={avatar} alt={name} />
            </div>

            <p className={styles.testimonial__text}>{testimonial}</p>

            <header>
                <h2 className={styles.testimonial__name}>{name}</h2>
                <p className={styles.testimonial__role}>{role}</p>
            </header>
        </article>
    )
}

export default Testimonial
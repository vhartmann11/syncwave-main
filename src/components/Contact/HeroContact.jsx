import styles from "../../styles/Contact/HeroContact.module.scss"

const HeroContact = () => {
    return (
            <section className={styles.HeroContact}>
                <div className={styles.Title}>
                    <div className={styles.GetInTouch}>
                        <h1>
                            Entre em contato conosco
                            <span>!</span>
                        </h1>
                    </div>
                </div>
            </section>
    )
}

export default HeroContact;

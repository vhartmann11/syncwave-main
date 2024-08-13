import styles from "../../styles/About/HeroAbout.module.scss"

const HeroAbout = () => {
    return (
            <section className={styles.AboutWork}>
                <div className={styles.Title}>
                    <div className={styles.HowWeWork}>
                        <h1>
                            Conheça mais sobre nosso trabalho
                            <span>.</span>
                        </h1>
                    </div>
                </div>
            </section>
    )
}

export default HeroAbout;

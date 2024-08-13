import styles from "../../styles/Projects/HeroProjects.module.scss"

const HeroProjects = () => {
    return (
        <section className={styles.HeroProjects}>
            <div className={styles.Title}>
                <div className={styles.GetInTouch}>
                    <h1>
                        Veja nossos projetos
                        <span>.</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default HeroProjects;

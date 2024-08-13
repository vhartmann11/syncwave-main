import styles from "../../styles/News/HeroNews.module.scss"

const HeroNews = () => {
    return (
        <section className={styles.HeroNews}>
            <div className={styles.Title}>
                <div className={styles.GetInTouch}>
                    <h1>
                        Veja as últimas notícias
                        <span>!</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default HeroNews;

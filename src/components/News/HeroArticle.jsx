import React from 'react';
import styles from "../../styles/News/HeroNews.module.scss"

const HeroArticle = ({ title }) => {
    return (
        <section className={styles.HeroNews}>
            <section className={styles.Title}>
                <div className={styles.GetInTouch}>
                    <h1>
                        {title}
                        <span>!</span>
                    </h1>
                </div>
            </section>
        </section>
    )
}

export default HeroArticle;

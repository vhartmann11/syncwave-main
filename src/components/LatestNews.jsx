import styles from "../styles/Home/LatestNews.module.scss";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    const { ref, inView } = useInView({ 
        triggerOnce: true,
        threshold: .5
    });
    const controls = useAnimation();
    const animationDuration = .6;

    useEffect(() => {
        if (inView) {
            controls.start((i) => ({
                x: 0,
                opacity: 1,
                transition: { duration: animationDuration, delay: i * (animationDuration + .3) }
            }));
        }
    }, [inView, controls]);

    const newsItems = [
        {
            id: 1,
            date: { month: 'Abr', day: '22', year: '2024' },
            title: 'Interferência Cultural no Espaço da Música Clássica Mundial',
            image: 'https://culturanf.com.br/wp-content/uploads/2023/12/fotografia-concerto-musica-classica-orquestra-maestro.webp',
            link: '/news/1'
        },
        {
            id: 2, 
            date: { month: 'Abr', day: '20', year: '2024' },
            title: 'Concerto fechando seu penúltimo show cheio de emoções no Brasil',
            image: 'https://www.radiorock.com.br/wp-content/uploads/2023/11/roger-waterr-sao-paulo.jpg',
            link: '/news/2'
        }
    ];

    return (
        <section className={styles.LatestNews}>
            <div className={styles.Container} ref={ref}>
                <h2 className={styles.TitleNews}>Últimas <span>novidades</span></h2>
                <ul className={styles.NewsContainer}>
                    {newsItems.map((news, i) => (
                        <motion.div
                            key={i}
                            className={styles.NewsMain}
                            custom={i}
                            initial={{ x: -130, opacity: 0 }}
                            animate={controls}
                        >
                            <Link to={news.link} className={styles.New}>
                                <div className={styles.NewDate}>
                                    <p className={styles.Month}>{news.date.month}</p>
                                    <p className={styles.Day}>{news.date.day}</p>
                                    <p className={styles.Year}>{news.date.year}</p>
                                </div>
                                <div className={styles.NewDescription}>
                                    <h3>{news.title}</h3>
                                    <div className={styles.NewsButton}>
                                        <span className={styles.Button}>Veja mais</span>
                                    </div>
                                </div>
                                <div className={styles.NewsDetails}>
                                    <img className={styles.DetailsImage} src={news.image} alt={news.title} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </ul>

                <Link className={styles.ButtonInfo} to="/news">
                    Saiba mais
                </Link>
            </div>
        </section>
    );
};

export default LatestNews;

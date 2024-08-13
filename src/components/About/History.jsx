import styles from "../../styles/About/History.module.scss"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const History = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")

        }
    })

    return (
        <section ref={ref} className={styles.History}>
            <motion.div className={styles.Container}
                variants={{
                    hidden: { opacity: 0, y: 175 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 2.5, delay: .875 }}>
                <div className={styles.Wrapper}>
                    <div className={styles.HistoryGr}>
                        <div className={styles.Title}>
                            <div className={styles.Description}>
                                <h2>
                                    conheça sobre
                                </h2>
                                nossa historia
                            </div>
                            <p>
                                A SyncWave é uma empresa moderna e dinâmica fundada com o objetivo de conectar tecnologia e cultura de maneira inovadora. Desde a nossa criação a mais de 20 anos, temos nos dedicado a oferecer soluções tecnológicas criativas e experiências culturais envolventes. Nossa equipe de especialistas trabalha para transformar ideias em projetos de sucesso, com foco em inovação, impacto social e excelência.
                            </p>
                        </div>
                        <img src="./aboutus1.webp" alt="Cantora no palco com detalhes sobre o show no fundo" />
                    </div>
                    <div className={styles.Strategy}>
                        <p>
                            Temos uma orientação estratégica de longo prazo como empresa que fornece serviços de consultoria de comunicação e marketing com campanhas e projetos criativos e eficazes para desenvolvimento de marca e suporte de vendas para empresas líderes no Brasil.
                        </p>
                        <img src="./abouts33.webp" alt="Multidão de pessoas no show de Rock" />
                    </div>
                    <div className={styles.Leadership}>
                        <img src="./aboutus22.jpg" alt="Pessoas no encontro da música Brasileira" />
                        <p>
                            A SyncWave se destaca como a principal produtora de concertos internacionais e eventos musicais no Brasil. Com uma visão pioneira, criamos e investimos em projetos de entretenimento de alta qualidade, oferecendo ao público brasileiro experiências únicas e inesquecíveis que celebram a música mundial e atendem aos padrões internacionais mais exigentes.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default History
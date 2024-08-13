import { useEffect, useRef } from "react";
import styles from "../styles/Home/AboutUs.module.scss"
import { motion, useAnimation, useInView } from 'framer-motion'

const AboutUs = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")

        }
    })

    return (
        <section ref={ref} className={styles.AboutUs}>
            <div className={styles.Container}>
                <div className={styles.AboutUsGrid}>
                    <motion.div  className={styles.GridLeft}
                    variants={{
                        hidden: { opacity: 0, x: -250 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1, delay: .675 }}>
                        <img src="./Cherish.jpg" alt="" />
                    </motion.div>
                    <motion.div className={styles.GridRight}
                           variants={{
                            hidden: { opacity: 0, x: 250 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 1, delay: .675 }}>
                        <h2>
                            <span>20+</span> anos na industria de entretenimento.
                            <span></span>
                        </h2>
                        <p>Com mais de 20 anos de experiência no campo de consultoria em comunicação de marca, marketing e produção musical, a SyncWave deixou sua marca com projetos de comunicação e marketing, bem como produtos musicais e artísticos especiais no Brasil. Nós fornecemos uma variedade de serviços de entretenimento, incluindo organização de eventos e produção de filmes. Na SyncWave, sempre priorizamos a criatividade, oferecendo produtos e serviços de qualidade e ricos em emoção.</p>
                        <a href="/about">Descubra mais</a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
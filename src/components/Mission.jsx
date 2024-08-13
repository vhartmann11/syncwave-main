import { useEffect, useRef } from "react"
import styles from "../styles/Home/Mission.module.scss"
import { motion, useAnimation, useInView } from 'framer-motion'

const Mission = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    })

    return (
        <section ref={ref} className={styles.Mission}>
            <motion.div className={styles.Container}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: .7, delay: .575 }}>
                <h3>Nossa proposta é</h3>
                <h2>Trazer a melhor música e entretenimento do mundo para o Brasil, ultrapassando os limites da criatividade e da comunicação da marca, tornando-se um parceiro de confiança para o sucesso de empresas líderes no Brasil.</h2>
            </motion.div>
        </section>
    )
}

export default Mission
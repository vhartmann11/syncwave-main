import { useEffect, useRef } from "react";
import styles from "../../styles/About/ValuesAndBeliefs.module.scss"
import { motion, useAnimation, useInView } from "framer-motion";

const ValuesAndBeliefs = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")

        }
    })

    return (
        <section ref={ref} className={styles.Values}>
            <motion.div className={styles.Container}
                variants={{
                    hidden: { opacity: 0, y: 175 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1.5, delay: .875 }}>
                <div className={styles.VABWrapper}>
                    <div className={styles.Values2}>
                        <div className={styles.Title}>
                            <p>
                                <span> crenças e valores <br></br> </span> do nosso projeto.
                            </p>
                        </div>
                    </div>
                    <div className={styles.Beliefs}>
                        <div className={styles.Believe}>
                            <div className={styles.BelieveIcon}>
                                <p>1.</p>
                            </div>
                            <div className={styles.BelieveParagraph}>
                                <h2>Globalização</h2>
                                <p>Temos parcerias de longo prazo com a Recording Association of America, Fox World, UNESCO e os principais artistas do mundo para difundir o poder da música no Brasil.</p>
                            </div>
                        </div>
                        <div className={styles.Believe}>
                            <div className={styles.BelieveIcon}>
                                <p>2.</p>
                            </div>
                            <div className={styles.BelieveParagraph}>
                                <h2>Humano</h2>
                                <p>Com o Grupo SW, as pessoas são o foco do desenvolvimento a longo prazo. Criamos um ambiente de trabalho criativo, proporcionamos formação profissional, preservamos valores históricos e conectamos pessoas dentro da empresa.</p>
                            </div>
                        </div>
                        <div className={styles.Believe}>
                            <div className={styles.BelieveIcon}>
                                <p>3.</p>
                            </div>
                            <div className={styles.BelieveParagraph}>
                                <h2>Qualidade</h2>
                                <p className={styles.Paragraph}>    Sempre fornecemos as soluções, serviços, marketing, mídia e produtos musicais mais criativos e eficazes do mercado. Garantimos que nossos clientes recebam resultados que não apenas atendem, mas superam suas expectativas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default ValuesAndBeliefs
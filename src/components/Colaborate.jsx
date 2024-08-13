import { motion } from "framer-motion";
import styles from "../styles/Home/Colaborate.module.scss";
import { useInView } from "react-intersection-observer";

const Colaborate = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .1
    });

    return (
        <motion.section
            className={styles.Colaborate}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.img
                className={styles.Imagem1}
                src="https://conteudo.imguol.com.br/c/entretenimento/89/2022/08/30/detalhe-do-palco-mundo-do-rock-in-rio-2022-1661904223956_v2_900x506.jpg"
                alt=""
                initial={{ x: 800, opacity: 0, rotate: 0 }}
                animate={inView ? { x: 450, opacity: .2, rotate: 25 } : { x: 800, opacity: 0, rotate: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            />
            <motion.img
                className={styles.Imagem2}
                src="https://api.wegoout.com.br/images/news/934/full_1698334939.jpg"
                alt=""
                initial={{ x: -800, opacity: 0, rotate: 0 }}
                animate={inView ? { x: -250, opacity: .2, rotate: -25 } : { x: -800, opacity: 0, rotate: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            />
            <motion.img
                className={styles.Imagem3}
                src="https://uploads.metropoles.cloud/wp-content/uploads/2020/01/13121817/Bruce_Rock-in-Rio_.jpg"
                alt=""
                initial={{ x: 800, opacity: 0, rotate: 0 }}
                animate={inView ? { x: 350, opacity: .2, rotate: 25 } : { x: 800, opacity: 0, rotate: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
            />
            <motion.div
                className={styles.Container}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <h2 className={styles.Title}>
                    Estamos ansiosos para trabalhar com você.
                </h2>
                <a className={styles.ColaborateButton} href="/contact">
                    Entre em contato
                </a>
            </motion.div>
        </motion.section>
    );
};

export default Colaborate;

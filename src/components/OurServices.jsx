import styles from "../styles/Home/OurServices.module.scss";
import { FaMusic } from "react-icons/fa6";
import { SiPhotobucket } from "react-icons/si";
import { GiFilmSpool } from "react-icons/gi";
import { IoBarChart } from "react-icons/io5";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from 'framer-motion';

const OurServices = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const cardControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            cardControls.start(i => ({
                opacity: 1,
                y: 0,
                transition: { duration: 1.4, delay: i === 0 ? 1.0 : i * 0.3 + 1.2 }
            }));
        }
    }, [isInView, mainControls, cardControls]);

    return (
        <section ref={ref} className={styles.OurServices}>
            <div className={styles.Container}>
                <motion.div className={styles.Services}
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: .7, delay: .775 }}>
                    <h2 className={styles.Title}>Nossos <span>serviços </span></h2>
                    <p className={styles.Description}>Em cada um dos nossos serviços criaremos soluções inovadoras de qualidade elevada, experiências únicas e o melhor branding.</p>
                </motion.div>
                <motion.div className={styles.ContainerCards}
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    {[
                        {
                            img: "https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2021/09/Rock-in-Rio_Wesley-Allen-2019.jpg",
                            icon: <FaMusic className={styles.CardIcon} />,
                            title: "Evento",
                            description: "Conecte-se com as principais organizações de produção musical do mundo para trazer a melhor tecnologia musical e de artes cênicas do mundo para o Vietnã, criar tours de apresentações musicais, arte de lançamento de produtos, suporte de vendas e difusão de marca"
                        },
                        {
                            img: "https://f.i.uol.com.br/fotografia/2022/09/08/16626087576319657519e70_1662608757_3x2_md.jpg",
                            icon: <SiPhotobucket className={styles.CardIcon} />,
                            title: "Identidade Visual",
                            description: "Consultoria na construção e desenvolvimento de uma marca forte, planejando e construindo campanhas integradas de marketing e comunicação para divulgar a marca, promover o desenvolvimento de mercado e apoiar as vendas."
                        },
                        {
                            img: "https://www.mountpleasantstudio.com/wp-content/uploads/2014/07/making-microsoft-surface-tablet-film.png",
                            icon: <GiFilmSpool className={styles.CardIcon} />,
                            title: "Direção e Produção",
                            description: "Profissional da área de produção cinematográfica, filmes publicitários e programas de televisão, com o critério de colocar em primeiro lugar a criatividade no conteúdo e a diversidade nos estilos de expressão da imagem para criar produtos atrativos para o telespectador."
                        },
                        {
                            img: "https://www.events.nl/sites/default/files/styles/710x405/public/terren-hurst-blgOFmPIlr0-unsplash.jpg",
                            icon: <IoBarChart className={styles.CardIcon} />,
                            title: "Marketing Esportivo",
                            description: "Consultoria na construção de academias de formação de jovens, troca de direitos autorais para torneios esportivos, fornecimento de estrelas do esporte como representantes de marcas para que seus produtos possam atingir os clientes-alvo de forma eficaz."
                        }
                    ].map((card, i) => (
                        <motion.div key={i} className={styles.Cards}
                            custom={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={cardControls}>
                            <div className={styles.CardsMain}>
                                <img className={styles.CardImg} src={card.img} alt="" />
                                <div className={styles.CardsTitle}>
                                    {card.icon}
                                    <h2>{card.title}</h2>
                                </div>
                                <p className={styles.CardsDescription}>{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <a className={styles.Button} href="/projects">
                    Conheça
                </a>
            </div>
        </section>
    )
}

export default OurServices;

import styles from "../styles/Home/Testimonials.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
    return (
        <section className={styles.Testimonials}>
            <div className={styles.TitleArea}>
                <h2 className={styles.Title}>
                    O que nossos clientes acham de <span>nós</span>
                </h2>
            </div>
            <Swiper
                spaceBetween={50}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                pagination={false}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    368: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    }
                }}
            >
                <SwiperSlide className={styles.Slide}>
                    <p className={styles.SlideTitle}>"Gostaríamos de expressar nossa mais profunda gratidão à SyncWave pela colaboração e parceria contínua. Seu comprometimento com a excelência e a inovação tem sido fundamental para o sucesso de nossos projetos conjuntos. Agradecemos por sua dedicação e por sempre exceder nossas expectativas."</p>
                    <p>
                        <span>| </span>Marcelo Dias - Diretor Geral - Membro do Conselho de Administração da Sabeco
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" className="absolute bottom-0 right-4 bg-gradient-to-tr fill-secondary-350 opacity-10"><path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z"></path></svg>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" className="absolute bottom-0 right-4 bg-gradient-to-tr fill-secondary-350 opacity-10"><path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z"></path></svg>
                    <p className={styles.SlideTitle}>"Em nome de toda a nossa equipe, gostaria de agradecer à SyncWave pelo suporte e assistência excepcionais. Sua equipe demonstrou um nível de profissionalismo e prontidão que fez toda a diferença para nós. Agradecemos por estar ao nosso lado e por ajudar a superar desafios com soluções eficazes."</p>
                    <p>
                        <span>| </span>Maria Silva - Gerente de Qualidade - Gamma Corporation
                    </p>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" className="absolute bottom-0 right-4 bg-gradient-to-tr fill-secondary-350 opacity-10"><path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z"></path></svg>
                    <p className={styles.SlideTitle}>"Agradecemos imensamente à SyncWave pelos serviços de alta qualidade fornecidos. Sua atenção aos detalhes e compromisso com a satisfação do cliente são incomparáveis. Estamos ansiosos para continuar trabalhando juntos e alcançar novos patamares de sucesso."</p>
                    <p>
                        <span>| </span>Marcos Costa - Diretor de Desenvolvimento de Negócios - Epsilon Corporation
                    </p>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" className="absolute bottom-0 right-4 bg-gradient-to-tr fill-secondary-350 opacity-10"><path d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z"></path></svg>
                    <p className={styles.SlideTitle}>"Gostaríamos de expressar nossa gratidão à SyncWave pela excelente colaboração no projeto Zeta Industries. Sua expertise e dedicação foram essenciais para o sucesso deste empreendimento. Agradecemos por sua parceria e pelo impacto positivo que tiveram em nosso negócio."</p>
                    <p>
                        <span>| </span>Thiago Almeida - Vice-presidente de Operações - Zeta Industries
                    </p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Testimonials;

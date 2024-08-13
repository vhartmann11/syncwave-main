import styles from "../styles/Footer.module.scss"
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaFacebook, FaHome, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const handleSocialClick = (event) => {
        event.preventDefault();
    }

    return (
        <footer>
            <div className={styles.Container}>
                <div className={styles.FooterMain}>
                    <div className={styles.FooterInfos}>
                        <div className={styles.FooterLogo}>
                            <div className={styles.LogoTitle}>
                                <h6 className={styles.Title}>
                                    SYNCWAVE
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className={styles.FooterPaginas}>
                        <h6>
                            Páginas
                        </h6>
                        <div className={styles.PaginasMain}>
                            <div className={styles.PaginasItens}>
                                <a href="/" className={styles.Itens}>Página Inicial</a>
                            </div>
                            <div className={styles.PaginasItens}>
                                <a href="/about" className={styles.Itens}>Sobre nós</a>
                            </div>
                            <div className={styles.PaginasItens}>
                                <a href="/projects" className={styles.Itens}>Serviço</a>
                            </div>
                            <div className={styles.PaginasItens}>
                                <a href="/news" className={styles.Itens}>Notícias</a>
                            </div>
                            <div className={styles.PaginasItens}>
                                <a href="/contact" className={styles.Itens}>Contato</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.FooterEmpresa}>
                        <h6>
                            Empresa
                        </h6>
                        <div className={styles.EmpresaMain}>
                            <div className={styles.EmpresaItens}>
                                <FaHome fill="#68d849" className={styles.ItensIcon} />
                                <a className={styles.Itens}>Praça da República, República, São Paulo - SP </a>
                            </div>
                            <div className={styles.EmpresaItens}>
                                <AiOutlineMail fill="#68d849" className={styles.ItensIcon} />
                                <a className={styles.Itens}>contato@syncwave.com</a>
                            </div>
                            <div className={styles.EmpresaItens}>
                                <BsTelephoneInbound fill="#68d849" className={styles.ItensIcon} />
                                <a className={styles.Itens}>+99 99 9999999</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.FooterData}>
                <span>
                    @ 2024 SyncWave Brasil
                </span>
                <div className={styles.FooterSocials}>
                    <div className={styles.Socials}>
                        <a href="#" onClick={handleSocialClick}>
                            <FaFacebook className={styles.IconSocials} />
                        </a>
                    </div>
                    <div className={styles.Socials}>
                        <a href="#" onClick={handleSocialClick}>
                            <FaYoutube className={styles.IconSocials} />
                        </a>
                    </div>
                </div>
                <div className={styles.Rights}>
                    <a href="#" className={styles.RightsName}>
                        Desenvolvido por Vinicius Hartmann
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

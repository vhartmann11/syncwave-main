import styles from "../../styles/Contact/FormContact.module.scss";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContact = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [fullNameFocused, setFullNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!fullName) {
            notifyError("Nome Completo");
            return;
        }

        if (!email) {
            notifyError("E-mail");
            return;
        }

        if (!validateEmail(email)) {
            notifyInvalidEmail();
            return;
        }

        if (!message) {
            notifyError("Mensagem");
            return;
        }

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        toast.promise(promise, {
            pending: 'Enviando...',
            success: 'Mensagem enviada com sucesso! 👌',
            error: 'Ocorreu um erro. Tente novamente.',
        }, {
            position: "bottom-center",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        }).then(() => {
            setFullName("");
            setEmail("");
            setMessage("");
            setFullNameFocused(false);
            setEmailFocused(false);
            setMessageFocused(false);
        });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const notifyError = (field) => toast.error(`${field} é obrigatório`, {
        position: "bottom-center",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });

    const notifyInvalidEmail = () => toast.error(`E-mail inválido`, {
        position: "bottom-center",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });

    return (
        <section className={styles.FormContact}>
            <ToastContainer limit={2} transition={Bounce} />
            <div className={styles.Contact}>
                <motion.div ref={ref}
                    variants={{
                        hidden: { opacity: 0, x: -250 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1, delay: .675 }}>
                    <form className={styles.Form} onSubmit={handleSubmit}>
                        <h2 className={styles.Title}>tem um projeto futuro? <br /><span>traremos grande sucesso.</span></h2>
                        <div className={styles.FormTitle}>
                            <div className={styles.FormGroup}>
                                <label className={styles.GroupLabel} htmlFor="fullName">Nome Completo</label>
                                <input
                                    className={styles.GroupInput}
                                    type="text"
                                    id="fullName"
                                    value={fullName}
                                    placeholder={fullNameFocused ? '' : 'ex: Pedro Campos da Silva'}
                                    onFocus={() => setFullNameFocused(true)}
                                    onBlur={(e) => setFullNameFocused(e.target.value !== '')}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.FormTitle}>
                            <div className={styles.FormGroup}>
                                <label className={styles.GroupLabel} htmlFor="email">E-mail</label>
                                <input
                                    className={styles.GroupInput}
                                    type="text"
                                    id="email"
                                    value={email}
                                    placeholder={emailFocused ? '' : 'ex: pedro@gmail.com'}
                                    onFocus={() => setEmailFocused(true)}
                                    onBlur={(e) => setEmailFocused(e.target.value !== '')}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.FormTitle}>
                            <div className={styles.FormGroup}>
                                <label className={styles.GroupLabel} htmlFor="message">Sua mensagem</label>
                                <textarea
                                    className={styles.GroupTxtArea}
                                    id="message"
                                    value={message}
                                    placeholder={messageFocused ? '' : 'ex: Tenho um projeto e gostaria de transformar em realidade com vocês! Podemos conversar?'}
                                    onFocus={() => setMessageFocused(true)}
                                    onBlur={(e) => setMessageFocused(e.target.value !== '')}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className={styles.FormButton}>
                            <div className={styles.Button}>
                                <button type="submit">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>
                </motion.div>

                <motion.div className={styles.Banner}
                    variants={{
                        hidden: { opacity: 0, x: 250 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1.2, delay: 1.5 }}>
                    <img src="https://www.ibgroup.vn/assets/images/compressed/HHKD3561.webp" alt="" />
                </motion.div>
            </div>
        </section>
    );
}

export default FormContact;

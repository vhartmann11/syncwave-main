import { useState, useEffect } from 'react';
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    let lastScrollTop = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className={`${styles.NavContainer} ${isNavbarVisible ? styles.visible : styles.hidden}`}>
                <div className={styles.NavLogo}>
                    <a className={styles.Logo} href="/">
                        <img src="./Logo3.png" alt="Logo" />
                    </a>
                </div>
                <div className={styles.NavLinks}>
                    <a className={styles.LinksContact} href="/contact">
                        Entre em contato
                    </a>
                    <button className={`${styles.LinksMenu} ${isMenuOpen ? styles.LinksMenuOpen : ''}`}
                        onClick={toggleMenu}>
                        {isMenuOpen ? '' : 'menu.'}
                    </button>
                </div>
            </nav>
            <nav className={`${styles.NavMenu} ${isMenuOpen ? styles.visible : ''}`}>
                <div className={styles.Menu}>
                    <div className={styles.MenuItems}>
                        <div className={styles.Items}>
                            <a href="/">Página Inicial</a>
                            <div className={styles.ItemsHover}></div>
                        </div>
                        <div className={styles.Items}>
                            <a href="/about">Sobre nós</a>
                            <div className={styles.ItemsHover}></div>
                        </div>
                        <div className={styles.Items}>
                            <a href="/projects">Serviço</a>
                            <div className={styles.ItemsHover}></div>
                        </div>
                        <div className={styles.Items}>
                            <a href="/news">Noticias</a>
                            <div className={styles.ItemsHover}></div>
                        </div>
                        <div className={styles.Items}>
                            <a href="/contact">Contato</a>
                            <div className={styles.ItemsHover}></div>
                        </div>
                    </div>
                    <img src="https://e0.pxfuel.com/wallpapers/134/821/desktop-wallpaper-black-dog-films-beyonce-and-jay-z-on-the-run-tour-beyonce-concert.jpg" alt="" />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
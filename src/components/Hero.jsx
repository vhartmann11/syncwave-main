import styles from '../styles/Home/Hero.module.scss';

const Hero = () => {
    const handleScroll = (event) => {
        event.preventDefault();
        window.scrollBy({
            top: 650,
            behavior: 'smooth'
        });
    };

    return (
        <section className={styles.MainCarrousel}>
            <div className={styles.VideoWrapper}>
                <div className={styles.VideoOverlay}></div>
                <video
                    className={styles.Video}
                    autoPlay
                    loop
                    muted
                    preload="auto"
                >
                    <source src="./video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.MainTitle}>
                    <h1 className={styles.Title}>
                        O futuro <br />agora
                        <span>.</span>
                    </h1>
                </div>
            </div>
            <a href="#" onClick={handleScroll}>
                <div className={styles.ScrollBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M12 19.575q-.2 0-.375-.062T11.3 19.3l-6.6-6.6q-.3-.3-.3-.712t.3-.713q.3-.3.7-.3t.7.3l4.9 4.9v-11.2q0-.425.288-.7T12 4q.425 0 .713.288T13 5v11.175l4.9-4.9q.3-.3.7-.3t.7.3q.3.3.3.713t-.3.712l-6.6 6.6q-.15.15-.325.213t-.375.062Z" />
                    </svg>
                </div>
            </a>
        </section>
    );
}

export default Hero;

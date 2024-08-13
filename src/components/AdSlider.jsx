import styles from "../styles/Home/AdSlider.module.scss";

const AdSlider = () => {
    return (
        <div className={styles.Slider}>
            <div className={styles.Wrapper}>
                <div className={styles.Slide}>
                    <img src="./c-e-a-logo.png" alt="" />
                    <img src="./coca-cola-logo-6.png" alt="" />
                    <img src="./tim-logo-2-1.png" alt="" />
                    <img src="/itau-logo-8.png" alt="" />
                    <img src="/multishow-logo.png" alt="" />
                    <img src="/tiktok-logo-icon-1.png" alt="" />
                    <img src="./heineken-logo.png" alt="" />
                </div>
                <div className={styles.Slide}>
                    <img src="./c-e-a-logo.png" alt="" />
                    <img src="./coca-cola-logo-6.png" alt="" />
                    <img src="./tim-logo-2-1.png" alt="" />
                    <img src="/itau-logo-8.png" alt="" />
                    <img src="/multishow-logo.png" alt="" />
                    <img src="/tiktok-logo-icon-1.png" alt="" />
                    <img src="./heineken-logo.png" alt="" />
                </div>
            </div >
        </div>
    );
}

export default AdSlider;

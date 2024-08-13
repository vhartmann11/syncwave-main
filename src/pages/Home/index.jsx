import AboutUs from "../../components/AboutUs";
import AdSlider from "../../components/AdSlider";
import Colaborate from "../../components/Colaborate";
import Hero from "../../components/Hero";
import LatestNews from "../../components/LatestNews";
import Mission from "../../components/Mission";
import OurServices from "../../components/OurServices";
import Testimonials from "../../components/Testimonials";


function Home() {

    return (
        <>
            <main>
                <Hero />
                <Mission />
                <AboutUs />
                <Testimonials />
                <AdSlider />
                <OurServices />
                <LatestNews />
                <Colaborate />
            </main>
        </>
    );
}

export default Home;

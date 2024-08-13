import HeroAbout from "../../components/About/HeroAbout";
import History from "../../components/About/History";
import Team from "../../components/About/Team";
import ValuesAndBeliefs from "../../components/About/ValuesAndBeliefs";

function About() {
    return (
        <>
            <main>
                <HeroAbout />
                <ValuesAndBeliefs />
                <History />
                <Team />
            </main>
        </>

    )
}

export default About;
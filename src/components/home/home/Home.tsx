import "./Home.css";
import { JSX, useEffect } from "react";
import homeTopBackground from "../../../assets/hero-background.png"
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../../Utils/Scroll.ts";
import { Footer } from "../../layout/footer/Footer.tsx";
import { Navbar } from "../../layout/navbar-area/navbar/Navbar.tsx";
import { About } from "../about/About.tsx";
import { Hero } from "../hero/Hero.tsx";
import { Projects } from "../projects/Projects.tsx";
import { Skills } from "../skills/Skills.tsx";


export function Home(): JSX.Element {

    const location = useLocation();

    useEffect(() => {
        if (location.state === "projects") {
            scrollToSection("projects");
            window.history.replaceState({}, "", window.location.pathname);
        }
    }, [location.state])


    return (
        <>
            <main className={`flex flex-col justify-center`}>
                <div id={"home"} className={"bg-no-repeat bg-cover bg-center"} style={{ backgroundImage: `url(${homeTopBackground})` }}>
                    <Navbar />
                    <Hero />
                </div>
                <div id="about">
                    <About />
                </div>

                <div id="skills">
                    <Skills />
                </div>

                <div id="projects">
                    <Projects />
                </div>

            </main>
            <Footer />
        </>
    );

}

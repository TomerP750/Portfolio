import "./Home.css";
import {JSX} from "react";
import {Hero} from "../Hero/Hero.tsx";
import {About} from "../About/About.tsx";
import {Projects} from "../Projects/Projects.tsx";
import {Contact} from "../Contact/Contact.tsx";
import {Navbar} from "../../NavbarArea/Navbar/Navbar.tsx";
import homeTopBackground from "../../../assets/hero-background.png"

export function Home(): JSX.Element {


    return (
        <div className={`flex flex-col gap-2 justify-center`}>
            <div id={"home"} className={"bg-no-repeat bg-cover bg-center"} style={{ backgroundImage: `url(${homeTopBackground})`}}>
            <Navbar/>
			<Hero/>
            </div>
            <div id="about">
                <About/>
            </div>

            <div id="projects">
                <Projects/>
            </div>

            <div id="contact">
                <Contact/>
            </div>
        </div>
    );

}

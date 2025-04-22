import "./Home.css";
import {JSX} from "react";
import {Hero} from "../Hero/Hero.tsx";
import {About} from "../About/About.tsx";
import {Projects} from "../Projects/Projects.tsx";
import {Contact} from "../Contact/Contact.tsx";

export function Home(): JSX.Element {




    return (
        <div className="flex flex-col gap-2 justify-center">
			<Hero/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
}

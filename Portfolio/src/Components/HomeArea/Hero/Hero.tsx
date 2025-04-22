import "./Hero.css";
import {JSX} from "react";

export function Hero(): JSX.Element {

    return (
        <section className={"bg-[#0f172a] items-center flex justify-center h-screen"}>
            <div className="flex justify-center w-[90%] min-[900px]:justify-between h-3/4">
                <div className="w-full items-center flex flex-col md:items-start text-[#10b981] md:w-[45%] gap-5">
                    <p className={"sm:text-left text-5xl sm:text-6xl md:7xl"}>Welcome,</p>
                    <p className={"text-neutral-100 sm:text-5xl md:6xl"}>I'm Tomer Jacob</p>
                    <p className={"text-white"}>I’m a passionate software developer specializing in crafting responsive, intuitive, and engaging digital experiences. My expertise spans full-stack development, including building robust backend systems and dynamic, beautiful front-end interfaces.
                        Let's build something amazing together.</p>
                    <span className={"text-white flex justify-start px-10 py-3 bg-[#10b981] rounded-full cursor-pointer hover:bg-gray-500 transition duration-200 ease-in"}>Lets Work</span>
                </div>
                <div className="hidden min-[900px]:block w-1/2">
                    <div className="w-full h-full bg-gray-600"></div>
                </div>
            </div>
        </section>
    );

}

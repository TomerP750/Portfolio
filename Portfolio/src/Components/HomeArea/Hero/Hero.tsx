import "./Hero.css";
import {JSX} from "react";

export function Hero(): JSX.Element {

    return (
        <section className={"h-96 bg-[#0f172a] items-center flex justify-center"}>
            <div className="flex w-[90%] justify-between">
                <div className="flex flex-col items-start text-[#10b981] w-[50%] gap-5">
                    <p className={"sm:text-left text-5xl sm:text-6xl md:7xl"}>Welcome, I'm Tomer Jacob</p>
                    <span className={"text-white flex justify-start px-10 py-3 bg-[#10b981] rounded-full cursor-pointer hover:bg-gray-500"}>Download CV</span>
                </div>
            </div>
        </section>
    );

}

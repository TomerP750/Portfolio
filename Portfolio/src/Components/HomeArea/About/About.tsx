import {motion} from "framer-motion";
import "./About.css";
import {JSX, useState} from "react";
import {educationData, experienceData} from "../../../Datas/TimelineData.ts";
import {TimelineType} from "../../../Models/TimelineType.ts";

export function About(): JSX.Element {
    return (
        <div className="text-white flex flex-col items-center py-16">
            <div className="flex flex-col w-4/5 items-center gap-20">
                {/* About Header */}
                <span className="mb-8 text-3xl font-bold">About</span>

                {/* About Me Static */}
                <div className="flex justify-start w-2/3 mb-6">
                    <p className="w-1/8 font-semibold">About Me</p>
                    <p className="w-full">
                        Hi, I’m Tomer, a Fullstack Developer with a passion for building scalable and efficient
                        applications. I completed the Java Fullstack Development course at John Bryce, where I graduated
                        with distinction. During this program, I gained comprehensive expertise in key technologies such
                        as Java, Spring, MySQL, React, HTML, CSS, JavaScript, TypeScript, Microservices and Docker. This
                        experience has equipped me with a solid foundation in both front-end and back-end development,
                        allowing me to create seamless, user-friendly applications.
                    </p>
                </div>

                <div className="flex justify-start w-2/3 mb-6">

                    <div className=" flex flex-col w-full">
                        <div className="flex justify-end w-9/10">a b</div>
                    </div>
                    <p className="w-1/8 font-semibold">Education</p>
                </div>

                <div className="flex justify-start w-2/3 mb-6">

                    <p className="w-1/8 font-semibold">Experience</p>
                    <p className="w-full">
                        <div className="flex">
                            a b
                        </div>
                    </p>

                </div>

                <div className="flex justify-start w-2/3 mb-6">

                    <div className=" flex flex-col w-full">
                        <div className="flex justify-end w-9/10">Java Spring JavaScript TypeScript MySql MongoDB Html CSS Tailwind CSS</div>
                    </div>
                    <p className="w-1/8 font-semibold">Skills</p>
                </div>


            </div>
        </div>
    );
}





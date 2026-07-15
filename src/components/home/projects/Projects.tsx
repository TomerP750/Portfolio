import { motion, useInView } from "framer-motion";
import { JSX, useRef } from "react";
import image from "../../../assets/projectsImage.png";
import { ProjectCard } from "../project-card/ProjectCard.tsx";
import "./Projects.css";
import { projectsData } from "../../../Datas/ProjectsData.ts";


export function Projects(): JSX.Element {

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px", amount: 0.1 });

    return (
        <div className="overflow-x-hidden">
            <motion.section
                ref={ref}
                className="flex flex-col bg-[#191f2f] items-center text-white gap-8 py-16"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <img src={image} alt="projects" className={"w-100 aspect-square"} />

                <div className="grid grid-cols-1 lg:grid-cols-2 w-4/5 gap-15 lg:gap-6">
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            className="w-full"
                        >
                            <ProjectCard project={project} key={project.id} />
                        </motion.div>
                    ))}
                </div>

            </motion.section>
        </div>
    );
}

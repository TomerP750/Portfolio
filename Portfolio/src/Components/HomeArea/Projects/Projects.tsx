import "./Projects.css";
import {JSX, useRef} from "react";
import {projectsData} from "../../../Datas/ProjectsData.ts";
import {ProjectCard} from "../ProjectCard/ProjectCard.tsx";
import {motion, useInView, Variants} from "framer-motion";

export function Projects(): JSX.Element {

    const ref = useRef<HTMLElement>(null);
    // Trigger when 20% visible and 200px inside bottom
    const inView = useInView(ref, { once: true, margin: "0px 0px -200px 0px", amount: 0.2 });

    // Container drives stagger of children
    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.2 }
        },
    };

    // Title pop-up animation
    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // Slide-in from left
    const leftVariants: Variants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.1 }
        }
    };

    // Slide-in from right toward center
    const rightVariants: Variants = {
        hidden: { x: "100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.1 }
        }
    };

    return (
        <div className="overflow-x-hidden">
            <motion.section
                ref={ref}
                className="flex flex-col items-center text-white gap-8 py-16"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <h2 className="self-start ml-16 text-4xl font-bold">My Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={index % 2 === 0 ? leftVariants : rightVariants}
                            className="w-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}

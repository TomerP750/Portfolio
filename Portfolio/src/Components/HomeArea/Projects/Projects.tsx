import "./Projects.css";
import {JSX} from "react";
import {projectsData} from "../../../Datas/ProjectsData.ts";
import {ProjectCard} from "../ProjectCard/ProjectCard.tsx";
import {motion, Variants} from "framer-motion";

export function Projects(): JSX.Element {

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            // transition: {
            //     staggerChildren: 0.2
            // }
        },
    };

    const leftVariants: Variants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20},
        },
    };

    const rightVariants: Variants = {
        hidden: { x: "100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    return (
        // this outer div hides any horizontal overflow
        <div className="overflow-x-hidden">
            <motion.div
                className="flex flex-col items-center text-white gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="flex justify-start w-9/10 mb-4 ml-[4rem]">
                    <h2 className="text-white text-4xl">My Projects</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 w-9/10 justify-items-center">
                    {projectsData.map((p, i) => (
                        <motion.div
                            key={p.id}
                            variants={i % 2 === 0 ? leftVariants : rightVariants}
                            className="w-full"
                        >
                            <ProjectCard project={p} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

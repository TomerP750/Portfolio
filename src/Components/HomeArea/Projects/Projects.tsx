import "./Projects.css";
import {ChangeEvent, JSX, useMemo, useRef, useState} from "react";
import {projectsData} from "../../../Datas/ProjectsData.ts";
import {ProjectCard} from "../ProjectCard/ProjectCard.tsx";
import {motion, useInView, Variants} from "framer-motion";
import image from "../../../assets/projectsImage.png";
import {AiFillCaretDown} from "react-icons/ai";


type SortType = "newest-oldest" | "oldest-newest" | "a-z" | "z-a";

export function Projects(): JSX.Element {

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, {once: true, margin: "0px", amount: 0.1});
    const [sortType, setSortType] = useState<SortType>("oldest-newest");

    const leftVariants: Variants = {
        hidden: {x: "-100%", opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {type: "spring", stiffness: 120, damping: 20, delay: 0.1}
        }
    };

    const rightVariants: Variants = {
        hidden: {x: "100%", opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {type: "spring", stiffness: 120, damping: 20, delay: 0.1}
        }
    };

    const sortProjects = (sortType: SortType) => {

        const projectList = [...projectsData];

        switch (sortType) {
            case "oldest-newest":
                return projectsData.sort((a, b) => a.id - b.id)
            case "newest-oldest":
                return projectsData.sort((a, b) => b.id - a.id);
            case "a-z":
                return projectsData.sort((a, b) => a.title.localeCompare(b.title));
            case "z-a":
                return projectsData.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return projectList;
        }
    }

    const sortedProjects = useMemo(
        () => sortProjects(sortType),
        [sortType])


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortType(e.target.value as SortType);
    }

    return (
        <div className="overflow-x-hidden">
            <motion.section
                ref={ref}
                className="flex flex-col items-center text-white gap-8 py-16"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <img src={image} alt="projects" className={"w-100 aspect-square"}/>
                <div className={"flex w-4/5 items-center justify-end"}>
                    <div className="relative inline-block w-40">
                        <select
                            className="w-full bg-[#0f172a] px-2 py-1 pr-8 border border-[#10b981] focus:border-white cursor-pointer appearance-none"
                            value={sortType}
                            onChange={handleChange}
                        >
                            <option value="oldest-newest">Oldest - Newest</option>
                            <option value="newest-oldest">Newest - Oldest</option>
                            <option value="a-z">A - Z</option>
                            <option value="z-a">Z - A</option>
                        </select>

                        <div className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2">
                            <AiFillCaretDown className="text-white"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-4/5 gap-5">
                    {sortedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={index % 2 === 0 ? leftVariants : rightVariants}
                            className="w-full"
                        >
                            <ProjectCard project={project} key={project.id}/>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}

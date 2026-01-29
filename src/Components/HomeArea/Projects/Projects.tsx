import "./Projects.css";
import { ChangeEvent, JSX, useMemo, useRef, useState } from "react";
import { projectsData } from "../../../Datas/ProjectsData.ts";
import { ProjectCard } from "../ProjectCard/ProjectCard.tsx";
import { motion, useInView } from "framer-motion";
import image from "../../../assets/projectsImage.png";
import { AiFillCaretDown } from "react-icons/ai";



type SortType = "newest-oldest" | "oldest-newest" | "a-z" | "z-a";

export function Projects(): JSX.Element {

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px", amount: 0.1 });

    const [sortType, setSortType] = useState<SortType>("oldest-newest");

    

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

    const sortedProjects = useMemo(() =>
        sortProjects(sortType),
        [sortType])


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortType(e.target.value as SortType);
    }

    return (
        <div className="overflow-x-hidden">
            <motion.section
                ref={ref}
                className="flex flex-col bg-[#191f2f] items-center text-white gap-8 py-16"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <img src={image} alt="projects" className={"w-100 aspect-square"} />

                <div className={"flex w-4/5 items-center justify-end gap-5"}>

                    {/* <div className="relative">
                        <button onClick={() => setFilterOpen(!filterOpen)}>
                            <FaFilter size={20} className={`hover:text-[#10b981] transition-colors cursor-pointer ${filterOpen ? 'text-[#10b981]' : 'text-white'}`} />
                        </button>
                        {filterOpen &&
                            <div className="flex flex-col gap-5 items-start justify-center px-5 absolute bg-slate-800 border border-[#10b981] rounded-lg h-40 w-60 right-0 mt-2 z-1000">

                                <label className="flex items-center space-x-3 mb-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="role"
                                        value="fullstack"
                                        className="w-4 aspect-square accent-[#10b981] rounded-md cursor-pointer"
                                    />
                                    <span className="text-white">Full Stack</span>
                                </label>

                                <label className="flex items-center space-x-3 mb-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="role"
                                        value="frontend"
                                        className="w-4 aspect-square accent-[#10b981] rounded-md cursor-pointer"
                                    />
                                    <span className="text-white">Front End</span>
                                </label>

                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="role"
                                        value="backend"
                                        className="w-4 aspect-square accent-[#10b981] rounded-md cursor-pointer"
                                    />
                                    <span className="text-white">Back End</span>
                                </label>

                            </div>}
                    </div> */}
                    
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
                            <AiFillCaretDown className="text-white" />
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 w-4/5 gap-15 lg:gap-5">
                    {sortedProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="w-full"
                        >
                            <ProjectCard project={project} key={project.id} />
                        </motion.div>
                    ))}
                </div>

                {/* {[...Array(paginationLength)].map((_, i) => (
                    <button
                        key={i}
                        className="text-white border-2 p-1 hover:text-[#10b981] hover:border-[#10b981]-2 transition-colors  aspect-square rounded-full text-center cursor-pointer"
                    >
                        {i + 1}
                    </button>
                ))} */}
                
            </motion.section>
        </div>
    );
}

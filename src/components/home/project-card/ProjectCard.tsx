import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { JSX, useState } from "react";
import { FaBookOpen, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Project } from "../../../Models/Project.ts";
import { ProjectType } from "../../../Models/ProjectType.ts";
import { Button } from "../../shared/Button/Button.tsx";
import "./ProjectCard.css";


interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {

    const mainImageUrl = project.imageUrl?.[0]?.trim();
    const githubDisabled = !project.gitHubUrl?.trim();
    const webUrlDisabled = !project.webUrl?.trim();
    const [imageHovered, setImageHovered] = useState<boolean>(false);
    const navigate = useNavigate();

    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    const truncatedContent =
        project.content.length > 100
            ? project.content.slice(0, 200) + '...'
            : project.content;



    return (
        <>
            <div className=" border-[#10b981] flex flex-1 flex-col items-center w-full">
                {mainImageUrl ? (
                    <div
                        className="relative w-full h-auto group flex items-center justify-center"
                        onMouseOver={() => setImageHovered(true)}
                        onMouseLeave={() => setImageHovered(false)}
                    >
                        <img
                            src={mainImageUrl}
                            alt={`${project.title} preview`}
                            className={`block w-full h-auto ${imageHovered ? "pointer-events-none" : ""}`}
                        />

                        {imageHovered && (
                            <AnimatePresence>
                                <motion.div
                                    className="absolute inset-0 sm:px-10 flex items-center justify-around bg-black/60 z-10"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                >
                                    <motion.div
                                        className="flex flex-col items-center text-white hover:text-[#10b981] cursor-pointer"
                                        variants={itemVariants}
                                        onClick={() => navigate(`/project/${project.id}`)}
                                    >
                                        <FaBookOpen size={25} />
                                        <p>Learn More</p>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
                                            <Button
                                                disabled={githubDisabled}
                                                Icon={FaGithub}
                                                size={25}
                                                className="flex flex-col text-white items-center hover:text-[#10b981] cursor-pointer disabled:cursor-not-allowed disabled:text-white/50"
                                            >
                                                Github
                                            </Button>
                                        </a>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <a href={project.webUrl} target="_blank" rel="noopener noreferrer">
                                            <Button
                                                disabled={webUrlDisabled}
                                                Icon={FiExternalLink}
                                                size={25}
                                                className="flex flex-col text-white items-center hover:text-[#10b981] cursor-pointer disabled:cursor-not-allowed disabled:text-white/50"
                                            >
                                                Website
                                            </Button>
                                        </a>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                ) : (
                    <div className="flex h-73 w-full items-center justify-center bg-white/5">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl font-semibold text-white/60">
                            ?
                        </span>
                    </div>
                )}

                {/* Bottom section */}
                <div className="rounded-b-2xl shadow-lg shadow-[#10b981]/20 bg-slate-950/50 border-t border-[#10b981] flex h-[380px] flex-col items-center w-full">

                    <div className="flex flex-col items-start sm:flex-row sm:justify-between mt-5 w-9/10">
                        <p className="mb-4 font-semibold text-2xl text-white underline underline-offset-8">{project.id} {project.title}</p>
                        <div className="flex gap-4 mb-4 sm:mb-0">
                            <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
                                <button aria-label="Github button" disabled={githubDisabled}
                                    className={"disabled:cursor-not-allowed " +
                                        "disabled:text-white/50 text-white hover:text-[#8257e5] cursor-pointer"}>
                                    <FaGithub
                                        size={25}
                                        className="transition duration-200 ease-in"
                                    />
                                </button>
                            </a>
                            <a href={project.webUrl} target="_blank" rel="noopener noreferrer">
                                <button aria-label="Webpage link button" disabled={webUrlDisabled}
                                    className={"disabled:cursor-not-allowed " +
                                        "disabled:text-white/50 text-white hover:text-[#10b981] cursor-pointer"}>
                                    <FiExternalLink
                                        size={25}
                                        className="transition duration-200 ease-in"
                                    />
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center w-9/10 gap-4">
                        {project.projectType?.map(p =>
                            <span
                                key={p.toString()}
                                className={`px-2 py-1 text-black text-sm rounded-xl
                            ${p === ProjectType.FULLSTACK ? "bg-[#EEF2FF]" : p === ProjectType.BACKEND ? "bg-[#ECFDF5]" : "bg-[#FFF8E1]"}`}>
                                {p.toString()}</span>)}
                        {project.inProgress && <span className="text-sm inline-flex items-center gap-1">
                            <GiProgression size={18} />
                            In Progress</span>}
                    </div>


                    <div className="flex justify-start text-sm w-9/10 mt-2 gap-2 flex-wrap">
                        {project.programingLanguages?.map((pl) => {
                            const Icon = pl.icon;
                            return (
                                <li
                                    key={pl.language}
                                    className="rounded-full px-2 py-1 text-sm font-medium text-white flex items-center gap-2"
                                    style={{ backgroundColor: pl.colorHexCode }}
                                >
                                    <Icon size={16} className="text-white" />
                                    {pl.language}
                                </li>
                            );
                        })}
                    </div>

                    <div className="flex justify-start w-9/10 mt-8">
                        <p className="text-white">{truncatedContent}</p>
                    </div>

                    <div className="mt-auto flex w-9/10 justify-end pt-6 mb-8">
                        <span
                            onClick={() => navigate(`/project/${project.id}`)}
                            className={" flex items-center gap-1 text-[#10b981] hover:opacity-80 transition duration-200 ease-in cursor-pointer"}>
                            Learn More <ArrowRight />
                        </span>
                    </div>
                </div>
            </div>

        </>
    );

}


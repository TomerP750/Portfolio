import {JSX, useEffect, useState} from "react";
import "./ProjectCard.css";
import {Project} from "../../../Models/Project.ts";
import {ArrowRight} from "lucide-react";
import {FiExternalLink} from "react-icons/fi";
import {FaGithub} from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";
import {ProjectType} from "../../../Models/ProjectType.ts";


interface ProjectCardProps {
    project: Project
}

export function ProjectCard({project}: ProjectCardProps): JSX.Element {


    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const handleReadMore = () => {
        setModalOpened(true);

    }
    const handleClose = () => {
        setModalOpened(false);
    }

    const truncatedContent =
        project.content.length > 100
            ? project.content.slice(0, 200) + '...'
            : project.content;

    const modalVariants = {
        hidden: {opacity: 0, scale: 0.8, transition: {duration: 0.2}},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.3}},
        exit: {opacity: 0, scale: 0.8, transition: {duration: 0.3}},
    };

    useEffect(() => {
        if (modalOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        }
    }, [modalOpened]);

    return (
        <>
            <div className={`w-full h-[600px] flex flex-col items-center border border-[#10b981]`}>
                {project.imageUrl ? <img src={project.imageUrl}/> : <div className="w-full bg-[#10b981] h-4/5"></div>}
                <div className={"border-t border-[#10b981] flex flex-col items-center h-full w-full"}>

                    <div className="flex flex-col items-start sm:flex-row sm:justify-between mt-5 w-9/10">
                        <p className="mb-4 font-semibold text-2xl text-white underline underline-offset-8">{project.id}) {project.title}</p>
                        <div className="flex gap-4 mb-4 sm:mb-0">
                            <FaGithub
                                size={25}
                                className="cursor-pointer text-white hover:text-[#8257e5] transition duration-200 ease-in"
                            />
                            <FiExternalLink
                                size={25}
                                className="cursor-pointer text-white hover:text-[#10b981] transition duration-200 ease-in"
                            />
                        </div>
                    </div>
                    <div className="flex justify-start w-9/10">
                        {project.projectType?.map(p =>
                            <span
                                className={`px-2 py-1 text-black text-sm rounded-xl
                            ${p === ProjectType.FULLSTACK ? "bg-[#EEF2FF]" : p === ProjectType.BACKEND ? "bg-[#ECFDF5]" : "bg-[#FFF8E1]"}`}>
                            {p.toString()}</span>)}
                    </div>

                    {/*//TODO complete it its the programming languages used*/}
                    <div className="flex justify-start text-sm w-9/10 mt-2">
                        {project.programingLanguages?.map(pl => <span>{pl}</span>)}
                    </div>


                    <div className="flex justify-start w-9/10 h-1/2 mt-8">
                        <p className="text-white">{truncatedContent}</p>
                    </div>
                    <div
                        onClick={handleReadMore}
                        className="flex w-9/10 justify-end mb-8"
                    >
                    <span className={"text-[#10b981] hover:opacity-80 transition duration-200 ease-in cursor-pointer"}>
                        Learn More <ArrowRight className="inline"/>
                    </span>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {modalOpened && (
                    <div className="fixed inset-0 flex items-center justify-center p-4">

                        <div className="absolute inset-0 bg-black/50"/>

                        <motion.div
                            variants={modalVariants}
                            initial={"hidden"}
                            animate={"visible"}
                            exit={"exit"}
                            transition={{duration: 0.1}}
                            className="relative z-10 bg-[#0f172a] w-1/2 h-[90%] rounded-2xl overflow-hidden flex flex-col text-white"
                        >
                            {/* Scrollable content area */}
                            <div className="p-6 flex-grow overflow-y-auto">
                                <h2 className="text-xl font-semibold mb-4 text-[#10b981]">{project.title}</h2>
                                <p className="whitespace-pre-wrap">{project.content}</p>
                            </div>

                            {/* Footer with Close button */}
                            <div className="p-4 flex justify-end">
                                <button
                                    onClick={handleClose}
                                    className="cursor-pointer px-4 py-2 bg-[#10b981] text-white rounded-xl hover:opacity-80 transition"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );


}

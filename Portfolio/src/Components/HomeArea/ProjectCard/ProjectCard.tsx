// import {JSX, useEffect, useState} from "react";
// import "./ProjectCard.css";
// import {Project} from "../../../Models/Project.ts";
// import {ArrowRight} from "lucide-react";
// import {FiExternalLink} from "react-icons/fi";
// import {FaGithub} from "react-icons/fa";
// import {AnimatePresence, motion} from "framer-motion";
// import {ProjectType} from "../../../Models/ProjectType.ts";
//
//
// interface ProjectCardProps {
//     project: Project
// }
//
// export function ProjectCard({project}: ProjectCardProps): JSX.Element {
//
//
//     const [modalOpened, setModalOpened] = useState<boolean>(false);
//
//     const handleReadMore = () => {
//         setModalOpened(true);
//
//     }
//     const handleClose = () => {
//         setModalOpened(false);
//     }
//
//     const truncatedContent =
//         project.content.length > 100
//             ? project.content.slice(0, 200) + '...'
//             : project.content;
//
//     const modalVariants = {
//         hidden: {opacity: 0, scale: 0.8, transition: {duration: 0.2}},
//         visible: {opacity: 1, scale: 1, transition: {duration: 0.3}},
//         exit: {opacity: 0, scale: 0.8, transition: {duration: 0.3}},
//     };
//
//     const dropIn = {
//         hidden: {
//             y: "-100vh",
//             opacity: 0,
//         },
//         visible: {
//             y: "0",
//             opacity: 1,
//             transition: {duration: 0.3},
//             type: "spring",
//             damping: 25,
//             stiffness: 500,
//         },
//         exit: {
//             y: "100vh",
//             transition: {duration: 0.3},
//         }
//     }
//
//     useEffect(() => {
//         if (modalOpened) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "";
//         }
//         return () => {
//             document.body.style.overflow = "";
//         }
//     }, [modalOpened]);
//
//     return (
//         <>
//             <div className={`w-full h-[600px] flex flex-col items-center border border-[#10b981]`}>
//                 {project.imageUrl ? <img src={project.imageUrl}/> : <div className="w-full bg-[#10b981] h-4/5"></div>}
//                 <div className={"border-t border-[#10b981] flex flex-col items-center h-full w-full"}>
//
//                     <div className="flex flex-col items-start sm:flex-row sm:justify-between mt-5 w-9/10">
//                         <p className="mb-4 font-semibold text-2xl text-white underline underline-offset-8">{project.id}) {project.title}</p>
//                         <div className="flex gap-4 mb-4 sm:mb-0">
//                             <button disabled={!!project.gitHubUrl || project.gitHubUrl?.length === 0}
//                                     className={"disabled:cursor-default " +
//                                         "disabled:text-white/50 text-white hover:text-[#8257e5] cursor-pointer"}>
//                                 <FaGithub
//                                     size={25}
//                                     className="transition duration-200 ease-in"
//                                 />
//                             </button>
//                             <button disabled={!!project.webUrl || project.webUrl?.length === 0}
//                                     className={"disabled:cursor-default " +
//                                         "disabled:text-white/50 text-white hover:text-[#10b981] cursor-pointer"}>
//                                 <FiExternalLink
//                                     size={25}
//                                     className="transition duration-200 ease-in"
//                                 />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex justify-start w-9/10">
//                         {project.projectType?.map(p =>
//                             <span
//                                 className={`px-2 py-1 text-black text-sm rounded-xl
//                             ${p === ProjectType.FULLSTACK ? "bg-[#EEF2FF]" : p === ProjectType.BACKEND ? "bg-[#ECFDF5]" : "bg-[#FFF8E1]"}`}>
//                             {p.toString()}</span>)}
//                     </div>
//
//
//                     <div className="flex justify-start text-sm w-9/10 mt-2 gap-2 flex-wrap">
//                         {project.programingLanguages?.map((pl, idx) =>
//                             <span key={idx} className={"bg-[#10b981]/50 rounded-xl px-2 py-1"}>{pl}</span>)}
//                     </div>
//
//                     <div className="flex justify-start w-9/10 h-1/2 mt-8">
//                         <p className="text-white">{truncatedContent}</p>
//                     </div>
//                     <div
//                         onClick={handleReadMore}
//                         className="flex w-9/10 justify-end mb-8"
//                     >
//                     <span className={"text-[#10b981] hover:opacity-80 transition duration-200 ease-in cursor-pointer"}>
//                         Learn More <ArrowRight className="inline"/>
//                     </span>
//                     </div>
//                 </div>
//             </div>
//
//             <AnimatePresence>
//                 {modalOpened && (
//                     <div className="fixed inset-0 flex items-center justify-center p-4">
//
//                         <motion.div
//                             className="absolute w-full h-full flex items-center justify-center inset-0 bg-black/50"
//                             onClick={() => setModalOpened(false)}
//                             initial={{ opacity: 0 }}
//                             animate={{opacity: 1}}
//                             exit={{ opacity: 0 }}
//                         />
//
//                         <motion.div
//                             variants={dropIn}
//                             initial={"hidden"}
//                             animate={"visible"}
//                             exit={"exit"}
//                             // transition={{duration: 0.1}}
//                             className="relative z-10 bg-[#0f172a] w-4/5 sm:w-1/2 h-[90%] rounded-2xl overflow-hidden flex flex-col text-white"
//                         >
//                             {/* Scrollable content area */}
//                             <div className="p-6 flex-grow overflow-y-auto">
//                                 <h2 className="text-xl font-semibold mb-4 text-[#10b981]">{project.title}</h2>
//                                 <p className="whitespace-pre-wrap">{project.content}</p>
//                             </div>
//
//                             {/* Close Button */}
//                             <div className="p-4 flex justify-end">
//                                 <button
//                                     onClick={handleClose}
//                                     className="cursor-pointer px-4 py-2 bg-[#10b981] text-white rounded-xl hover:opacity-80 transition"
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         </motion.div>
//                     </div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
//
//
// }


import {JSX, useEffect, useState} from "react";
import "./ProjectCard.css";
import {Project} from "../../../Models/Project.ts";
import {ArrowRight} from "lucide-react";
import {FiExternalLink} from "react-icons/fi";
import {FaBookOpen, FaGithub} from "react-icons/fa";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {ProjectType} from "../../../Models/ProjectType.ts";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {useNavigate} from "react-router-dom";


interface ProjectCardProps {
    project: Project
}

export function ProjectCard({project}: ProjectCardProps): JSX.Element {


    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const [imageHovered, setImageHovered] = useState<boolean>(false);
    const navigate = useNavigate();

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


    const dropIn = {
        hidden: {
            y: "-100%",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {duration: 0.3},
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
        exit: {
            y: "100%",
            transition: {duration: 0.3},
        }
    }

    const containerVariants: Variants = {
        hidden: { },
        show: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show:   { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };


    return (
        <>
            <div className={`w-full h-[600px] flex flex-col items-center border border-[#10b981]`}>
                {project.imageUrl
                    ?
                    <div className="relative w-full h-auto group flex items-center justify-center"
                         onMouseOver={()=>setImageHovered(true)}
                         onMouseLeave={()=>setImageHovered(false)}>
                        <img
                            src={project.imageUrl}
                            alt="image"
                            className="block w-full h-auto"
                        />
                        {imageHovered && <AnimatePresence>
                            {imageHovered && (
                                <motion.div
                                    className="absolute inset-0 px-10 flex w-full items-center justify-around bg-black/50"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                >
                                    <motion.p className="flex flex-col items-center text-white hover:text-[#10b981] cursor-pointer" variants={itemVariants}>
                                        <FaBookOpen
                                            size={25}
                                            onClick={() =>
                                                navigate(
                                                    `/project/${project.id}`
                                                )
                                            }
                                            className=" "
                                        />
                                        <p>Learn More</p>
                                    </motion.p>
                                    <motion.p className="flex flex-col items-center text-white hover:text-[#8257e5] cursor-pointer" variants={itemVariants}>
                                        <button disabled={!!project.gitHubUrl || project.gitHubUrl?.length === 0}
                                                className={"disabled:cursor-default " +
                                                    "disabled:text-white/50 text-white"}>
                                            <FaGithub size={25} className="transition duration-200 ease-in"/>
                                        </button>
                                        <p>Github</p>
                                    </motion.p>
                                    <motion.p className="flex flex-col items-center text-white hover:text-[#10b981] cursor-pointer" variants={itemVariants}>
                                        <button disabled={!!project.webUrl || project.webUrl?.length === 0}
                                                className={"disabled:cursor-default " +
                                                    "disabled:text-white/50 text-white"}>
                                            <FiExternalLink size={25} className="transition duration-200 ease-in"/>
                                        </button>
                                        <p>Website</p>
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>}
                    </div>
                    : <div className="w-full bg-[#10b981] h-4/5"></div>}

                <div className={"border-t border-[#10b981] flex flex-col items-center h-full w-full"}>

                <div className="flex flex-col items-start sm:flex-row sm:justify-between mt-5 w-9/10">
                        <p className="mb-4 font-semibold text-2xl text-white underline underline-offset-8">{project.id}) {project.title}</p>
                        <div className="flex gap-4 mb-4 sm:mb-0">
                            <button disabled={!!project.gitHubUrl || project.gitHubUrl?.length === 0}
                                    className={"disabled:cursor-default " +
                                        "disabled:text-white/50 text-white hover:text-[#8257e5] cursor-pointer"}>
                                <FaGithub
                                    size={25}
                                    className="transition duration-200 ease-in"
                                />
                            </button>
                            <button disabled={!!project.webUrl || project.webUrl?.length === 0}
                                    className={"disabled:cursor-default " +
                                        "disabled:text-white/50 text-white hover:text-[#10b981] cursor-pointer"}>
                                <FiExternalLink
                                    size={25}
                                    className="transition duration-200 ease-in"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-start w-9/10">
                        {project.projectType?.map(p =>
                            <span
                                className={`px-2 py-1 text-black text-sm rounded-xl
                            ${p === ProjectType.FULLSTACK ? "bg-[#EEF2FF]" : p === ProjectType.BACKEND ? "bg-[#ECFDF5]" : "bg-[#FFF8E1]"}`}>
                            {p.toString()}</span>)}
                    </div>


                    <div className="flex justify-start text-sm w-9/10 mt-2 gap-2 flex-wrap">
                        {project.programingLanguages?.map((pl, idx) =>
                            <span key={idx} className={"bg-[#10b981]/50 rounded-xl px-2 py-1"}>{pl.language}</span>)}
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

                        <motion.div
                            className="absolute w-full h-full flex items-center justify-center inset-0 bg-black/50"
                            onClick={() => setModalOpened(false)}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        />

                        <motion.div
                            variants={dropIn}
                            initial={"hidden"}
                            animate={"visible"}
                            exit={"exit"}
                            // transition={{duration: 0.1}}
                            className="relative z-10 bg-[#0f172a] w-4/5 sm:w-1/2 h-[90%] rounded-2xl overflow-hidden flex flex-col text-white"
                        >
                            {/* Scrollable content area */}
                            <div className="p-6 flex-grow overflow-y-auto">
                                <h2 className="text-xl font-semibold mb-4 text-[#10b981]">{project.title}</h2>
                                <p className="whitespace-pre-wrap">{project.content}</p>
                            </div>

                            {/* Close Button */}
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

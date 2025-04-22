import {JSX, useState} from "react";
import "./ProjectCard.css";
import {Project} from "../../../Models/Project.ts";
import {ArrowRight, ExternalLinkIcon} from "lucide-react";
import {SiGithub} from "react-icons/si";
import {FiExternalLink} from "react-icons/fi";
import {FaGithub} from "react-icons/fa";


interface ProjectCardProps {
    project: Project
}

export function ProjectCard({project}: ProjectCardProps): JSX.Element {

    const [modalOpened, setModalOpened] = useState<boolean>(false);


    return (
        <div className="w-9/10 h-[400px] flex flex-col items-center border border-white">
            <div className="flex justify-between mt-5 w-9/10">
                <p className={"mb-4"}>{project.title}</p>
                <div className={"flex gap-2 "}>
                    <FaGithub size={20} className={"cursor-pointer text-white hover:text-[#8257e5] transition duration-200 ease-in"}/>
                    <FiExternalLink size={20} className={"cursor-pointer text-white hover:text-[#10b981] transition duration-200 ease-in"}/>
                </div>
            </div>
            <div className="flex justify-start w-9/10 h-[70%]">
                <p>{project.content}</p>
            </div>
            <div
                className="readmore w-9/10 flex justify-end text-white hover:text-[#10b981] transition duration-200 ease-in">
                <span className={"cursor-pointer"}>Read More <ArrowRight className={"inline cursor-pointer "}/></span>
            </div>
        </div>
    );


}

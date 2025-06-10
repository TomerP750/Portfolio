import "./ProjectDetailsPage.css";
import {JSX, useEffect} from "react";
import { Project } from "../../../Models/Project";
import {NavLink, useLocation, Navigate, useNavigate, useParams} from "react-router-dom";
import {FiArrowLeft, FiExternalLink} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import {projectsData} from "../../../Datas/ProjectsData.ts";
import {ProjectType} from "../../../Models/ProjectType.ts";


export function ProjectDetailsPage(): JSX.Element {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const project = projectsData.find(p => p.id === Number(id));
    const { pathname } = useLocation();
    const handleBackToMain = () => {
        navigate("/", {state: "projects", replace: true});
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    if (!project){
        return <Navigate to="/" state={"projects"} replace={true}/>
    }

    return (
        <div className="bg-[#0f172a] text-white min-h-screen flex flex-col pb-40">

            {/* MAIN CONTENT */}
            <main className="flex-grow flex flex-col items-center gap-10 py-10 px-4">

                <div
                    onClick={() => handleBackToMain()}
                    className="flex justify-center items-center gap-2 border border-white hover:border-[#10b981] px-6 py-2 rounded-full cursor-pointer text-sm hover:text-[#10b981] transition duration-300">
                    <FiArrowLeft/>
                    <p>Back to Main Page</p>
                </div>

                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full max-w-3xl max-h-[450px] object-cover shadow-lg"
                />


                <div className="flex flex-col items-center gap-4">

                    <div className="flex gap-5">
                        <NavLink
                            to={project.webUrl || "#"}
                            className="hover:text-[#10b981] transition"
                            aria-label="Live demo"
                        >
                            <FiExternalLink size={28}/>
                        </NavLink>
                        <NavLink
                            to={project.gitHubUrl || "#"}
                            className="hover:text-[#8257e5] transition"
                            aria-label="Source code"
                        >
                            <FaGithub size={28}/>
                        </NavLink>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-center">
                    {project.title}
                </h1>


                <section className="w-full max-w-3xl space-y-2">
                    <p className="text-lg font-semibold uppercase tracking-wide text-gray-300">
                        Project Type
                    </p>
                    {project.projectType?.map(p =>
                        <span
                            className={`px-2 py-1 text-black text-sm rounded-xl
                            ${p === ProjectType.FULLSTACK ? "bg-[#EEF2FF]" : p === ProjectType.BACKEND ? "bg-[#ECFDF5]" : "bg-[#FFF8E1]"}`}>
                            {p.toString()}</span>)}
                </section>

                <section className="w-full max-w-3xl space-y-3">
                    <p className="text-lg font-semibold uppercase tracking-wide text-gray-300">
                        Technologies
                    </p>
                    <ul className="flex flex-wrap gap-3">
                        {project.programingLanguages?.map((pl) => {
                            const Icon = pl.icon;
                            return (
                                <li
                                    key={pl.language}
                                    className="rounded-full px-4 py-1 text-sm font-medium text-white flex items-center gap-2"
                                    style={{backgroundColor: pl.colorHexCode}}
                                >
                                    <Icon size={16} className="text-white"/>
                                    {pl.language}
                                </li>
                            );
                        })}
                    </ul>
                </section>


                <section className="w-full max-w-3xl space-y-3">
                    <p className="text-lg font-semibold uppercase tracking-wide text-gray-300">
                        About the Project
                    </p>
                    <p className="leading-relaxed">{project.content}</p>
                </section>
            </main>


        </div>
    );
}

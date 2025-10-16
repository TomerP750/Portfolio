import "./ProjectDetailsPage.css";
import { JSX, useEffect } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../../../Datas/ProjectsData.ts";
import { ProjectType } from "../../../Models/ProjectType.ts";
import { Footer } from "../../Footer/Footer.tsx";
import { Button } from "../../Wrappers/Button/Button.tsx";


export function ProjectDetailsPage(): JSX.Element {


    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const project = projectsData.find(p => p.id === Number(id));
    const githubDisabled = !project?.gitHubUrl?.trim();
    const webUrlDisabled = !project?.webUrl?.trim();
    const { pathname } = useLocation();
    
    const handleBackToMain = () => {
        navigate("/", { state: "projects", replace: true });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    if (!project) {
        return <Navigate to="/" state={"projects"} replace={true} />
    }

    return (
        <>
            <div className="bg-[#0f172a] text-white min-h-screen flex flex-col pb-40">

                {/* MAIN CONTENT */}
                <main className="flex-grow flex flex-col items-center gap-10 py-10 px-4">

                    <div
                        onClick={() => handleBackToMain()}
                        className="flex justify-center items-center gap-2 border border-white hover:border-[#10b981] px-6 py-2 rounded-full cursor-pointer text-sm hover:text-[#10b981] transition duration-300">
                        <FiArrowLeft />
                        <p>Back to Main Page</p>
                    </div>

                    {project.videoUrl ? <video
                        src={project.videoUrl}
                        controls
                        muted
                        loop
                        playsInline
                        className="w-full max-w-3xl max-h-[450px] aspect-video object-cover shadow-lg"
                    /> : <img src={project.imageUrl} className="w-full max-w-3xl max-h-[450px] aspect-video object-cover shadow-lg bg-slate-800"/>}


                    <div className="flex flex-col items-center gap-4">

                        <div className="flex gap-5">
                            <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
                                <Button disabled={githubDisabled}
                                    Icon={FaGithub}
                                    size={30}
                                    className={"flex flex-col text-white items-center disabled:cursor-not-allowed disabled:text-white/50 hover:text-[#8257e5] cursor-pointer"}
                                />
                            </a>
                            <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
                                <Button
                                    disabled={webUrlDisabled}
                                    Icon={FiExternalLink}
                                    size={30}
                                    className={"flex flex-col text-white items-center disabled:cursor-not-allowed disabled:text-white/50 hover:text-[#10b981] cursor-pointer"}
                                />
                            </a>

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
                                key={p.toString()}
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
                                        style={{ backgroundColor: pl.colorHexCode }}
                                    >
                                        <Icon size={16} className="text-white" />
                                        {pl.language}
                                    </li>
                                );
                            })}
                        </ul>
                    </section>


                    <section className="w-full max-w-3xl flex flex-col gap-10">
                        <p className="text-lg font-semibold uppercase tracking-wide text-gray-300">
                            About the Project
                        </p>
                        <p className="leading-relaxed">{project.content}</p>


                        <div className="flex flex-col w-full mt-6 gap-2">
                            <strong className={"text-lg"}>Features:</strong>
                            {project.features?.map((feature, index) => (
                                <p key={index} className="text-white">
                                    • {feature}
                                </p>
                            ))}
                        </div>
                    </section>

                </main>


            </div>
            <Footer page={"projectPage"} />
        </>
    );
}

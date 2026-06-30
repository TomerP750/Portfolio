import "./ProjectDetailsPage.css";
import { JSX, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../../../Datas/ProjectsData.ts";
import { ProjectType } from "../../../Models/ProjectType.ts";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Button } from "../../../shared/ui/Button.tsx";
import { Footer } from "../../layout/footer/Footer.tsx";


export function ProjectDetailsPage(): JSX.Element {


    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const project = projectsData.find(p => p.id === Number(id));
    const githubDisabled = !project?.gitHubUrl?.trim();
    const { pathname } = useLocation();
    const [index, setIndex] = useState<number>(0);

    const handleBackToMain = () => {
        navigate("/", { state: "projects", replace: true });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    if (!project) {
        return <Navigate to="/" state={"projects"} replace={true} />
    }

    const images = project.imageUrl ?? [];
    const hasVideo = !!project.videoUrl;

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <>
            <div className="bg-[#0f172a] text-white min-h-screen flex flex-col pb-40">

                {/* MAIN CONTENT */}
                <main className="flex-grow flex flex-col items-center gap-10 py-10 px-4">

                    <button
                        aria-label="Back to main button"
                        onClick={() => handleBackToMain()}
                        className="flex justify-center items-center gap-2 border border-white hover:border-[#10b981] px-6 py-2 rounded-full cursor-pointer text-sm hover:text-[#10b981] transition duration-300">
                        <FiArrowLeft />
                        <p>Back to Main Page</p>
                    </button>

                    {hasVideo ? (
                        <video
                            src={project.videoUrl}
                            controls
                            muted
                            loop
                            playsInline
                            className="w-full max-w-3xl max-h-[450px] aspect-video object-cover shadow-lg"
                        />
                    ) : images.length > 0 ? (
                        <div className="relative w-full max-w-3xl">
                            {/* Current image */}
                            <img
                                src={images[index]}
                                alt="image"
                                className="w-full max-w-3xl max-h-[450px] object-cover shadow-lg bg-slate-800 rounded-xl"
                            />

                            {/* Prev button */}
                            {images.length > 1 && (
                                <button
                                    type="button"
                                    aria-label="Previous image arrow button"
                                    onClick={handlePrev}
                                    className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white text-xl hover:bg-black/70"
                                >
                                    <BiChevronLeft/>
                                </button>
                            )}

                            {/* Next button */}
                            {images.length > 1 && (
                                <button
                                    type="button"
                                    aria-label="Next image arrow button"
                                    onClick={handleNext}
                                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white text-xl hover:bg-black/70"
                                >
                                    <BiChevronRight/>
                                </button>
                            )}

                            {/* Dots */}
                            {images.length > 1 && (
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            aria-label="Index navigate circles buttons"
                                            type="button"
                                            onClick={() => setIndex(i)}
                                            className={`h-2.5 w-2.5 rounded-full transition ${i === index
                                                    ? "bg-white"
                                                    : "bg-white/40 hover:bg-white/70"
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : null}




                    <div className="flex flex-col items-center gap-4">

                        <div className="flex gap-5">
                            <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
                                <Button disabled={githubDisabled}
                                    size={30}
                                    className={"flex flex-col text-white items-center disabled:cursor-not-allowed disabled:text-white/50 hover:text-[#8257e5] cursor-pointer"}
                                >
                                    <FaGithub size={30} />
                                </Button>
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

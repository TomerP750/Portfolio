import "./Projects.css";
import {JSX} from "react";
import {projectsData} from "../../../Datas/ProjectsData.ts";
import {ProjectCard} from "../ProjectCard/ProjectCard.tsx";

export function Projects(): JSX.Element {



    return (
        <div className="flex flex-col items-center text-white gap-5">
            <div className="flex justify-start w-9/10 mb-4 ml-[4rem]">
                <h2 className={"text-white text-4xl"}>My Projects</h2>
            </div>

            <div className="grid grid-cols-1  sm:grid-cols-2 w-9/10 justify-items-center">
                {projectsData.map(p => <ProjectCard key={p.id} project={p}/>)}
            </div>
        </div>
    );
}

import "./Projects.css";
import {JSX} from "react";
import {projectsData} from "../ProjectsData.ts";
import {ProjectCard} from "../ProjectCard/ProjectCard.tsx";

export function Projects(): JSX.Element {



    return (
        <div className="flex flex-col items-center text-white gap-5">
			<p className={"text-white"}>My Projects</p>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 w-3/4 justify-items-center">
                {projectsData.map(p => <ProjectCard key={p.id} project={p}/>)}
            </div>
        </div>
    );
}

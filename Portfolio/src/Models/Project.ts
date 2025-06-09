import {ProjectType} from "./ProjectType.ts";
import {ProgrammingLanguage} from "./ProgrammingLanguage.ts";


export class Project {
    id: number
    title: string
    content: string
    projectType?: ProjectType[]
    programingLanguages?: ProgrammingLanguage[]
    gitHubUrl?: string
    webUrl?: string
    imageUrl?: string




    constructor(id: number ,title:string, content:string,projectType?: ProjectType[]  ,programingLanguages?: ProgrammingLanguage[],gitHubUrl?: string, webUrl?: string, imageUrl?:string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.projectType = projectType;
        this.programingLanguages = programingLanguages;
        this.gitHubUrl = gitHubUrl;
        this.webUrl = webUrl;
        this.imageUrl = imageUrl;

    }
}
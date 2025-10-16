import {ProjectType} from "./ProjectType.ts";
import {Technology} from "./Technology.ts";


export class Project {
    id: number
    title: string
    content: string
    features?: string[];
    projectType?: ProjectType[]
    programingLanguages?: Technology[]
    gitHubUrl?: string
    webUrl?: string
    imageUrl?: string
    videoUrl?: string




    constructor(id: number , title:string, content:string, features?: string[] , projectType?: ProjectType[]  , programingLanguages?: Technology[], gitHubUrl?: string, webUrl?: string, imageUrl?:string, videoUrl?: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.features = features;
        this.projectType = projectType;
        this.programingLanguages = programingLanguages;
        this.gitHubUrl = gitHubUrl;
        this.webUrl = webUrl;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;

    }
}
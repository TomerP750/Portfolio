

export class Project {
    id: number
    title: string
    content: string
    gitHubUrl?: string
    webUrl?: string


    constructor(id: number ,title:string, content:string,gitHubUrl?: string, webUrl?: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.gitHubUrl = gitHubUrl;
        this.webUrl = webUrl;
    }
}
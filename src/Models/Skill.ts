import { IconType } from "react-icons"


export class Skill {

    name: string
    icon: IconType
    color: string
    role: Role 

    constructor(name: string, icon: IconType, color: string, role: Role ) {
        this.name = name;
        this.icon = icon;
        this.color = color;
        this.role = role;
    }

}

export type Role = "backend" | "database" | "frontend" | "tools" | "cloud";
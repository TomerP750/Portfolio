import {IconType} from "react-icons";


export class ProgrammingLanguage {
    language: string;
    colorHexCode: string;
    icon: IconType;

    constructor(language: string, colorHexCode: string, icon: IconType) {
        this.language = language;
        this.colorHexCode = colorHexCode;
        this.icon = icon;
    }
}
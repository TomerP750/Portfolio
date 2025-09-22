import { Skill } from "../../Models/Skill";

interface SkillCardProps {
    skill: Skill
};

export function SkillCard({ skill }: SkillCardProps) {
    
    const Icon = skill.icon;

    return (
        <div className="text-white flex flex-col gap-4 items-center">
            <Icon size={45} color={`${skill.color}`}/>
            <span>{skill.name}</span>
        </div>
    );

};
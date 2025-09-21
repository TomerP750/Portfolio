import { motion, Variants } from "framer-motion";
import { skills } from "../../../Datas/SkillsData.ts";
import image from "../../../assets/skillsImage.png";
import { JSX, useState } from "react";
import { SkillCard } from "../SkillCard.tsx";
import { Role } from "../../../Models/Skill.ts";

export function Skills(): JSX.Element {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const buttonStyle = "py-1 px-3 cursor-pointer rounded-xl"
    const activeButtonStyle = "bg-[#10b981]"

    const [active, setActive] = useState<Role>("backend");


    const getSkills = (active: Role) => {

        return skills.length > 0 ? skills.filter(s => s.role === active) : [];

    }


    return (
        <section className="skills-section max-w-5xl mx-auto mt-16 mb-24 px-4">

            {/* Image */}
            <motion.div
                className="w-full flex justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src={image}
                    alt="mySkills"
                    className="w-80 aspect-square"
                />
            </motion.div>

            <div className="flex flex-col items-center gap-10">
                {/* Buttons */}
                <motion.div
                    className="flex justify-center items-center gap-3 text-white mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }}
                >
                    <motion.button
                        onClick={() => setActive("backend")}
                        className={`${buttonStyle} ${active === "backend" && activeButtonStyle}`}>Backend
                    </motion.button>

                    <motion.button
                        onClick={() => setActive("database")}
                        className={`${buttonStyle} ${active === "database" && activeButtonStyle}`}>Database
                    </motion.button>

                    <motion.button
                        onClick={() => setActive("frontend")}
                        className={`${buttonStyle} ${active === "frontend" && activeButtonStyle}`}>Frontend
                    </motion.button>

                    <motion.button
                        onClick={() => setActive("tools")}
                        className={`${buttonStyle} ${active === "tools" && activeButtonStyle}`}>Tools
                    </motion.button>


                </motion.div>

                {/* Skills grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 w-4/5 min-h-70"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {getSkills(active).map(s => <SkillCard skill={s} />)}
                </motion.div>
            </div>
        </section>
    );
}


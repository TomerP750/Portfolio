import { AnimatePresence, motion, Variants } from "framer-motion";
import { JSX, useMemo, useState } from "react";
import { skills } from "../../../Datas/SkillsData.ts";
import { Role } from "../../../Models/Skill.ts";
import image from "../../../assets/skillsImage.png";
import { SkillCard } from "./SkillCard.tsx";

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

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.50 } },
        exit: { opacity: 0, y: -8, transition: { duration: 0.12 } },
    };

    
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true })


    const [active, setActive] = useState<Role>("backend");


    const getSkills = (role: Role) => skills && skills.length > 0 ? skills.filter((s) => s.role === role) : [];

    const filtered = useMemo(() => getSkills(active), [active, skills]);


    return (
        <motion.section className="skills-section max-w-5xl mx-auto mt-16 mb-24 px-4">

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
                    layout

                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }}
                >
                    {["backend", "database", "frontend", "tools"].map((role) => (
                        <motion.button
                            aria-label="Skill header button"
                            key={role}
                            onClick={() => setActive(role as Role)}
                            className="relative py-1 px-4 rounded-xl font-medium text-sm md:text-base cursor-pointer"
                        >
                            {/* Shared background */}
                            {active === role && (
                                <motion.div
                                    layoutId="active-background"
                                    className="absolute inset-0 rounded-xl bg-emerald-500"
                                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                />
                            )}
                            <span className="relative z-10">{role.charAt(0).toUpperCase() + role.slice(1)}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills grid */}
                <motion.div
                    key={active} 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 sm:gap-6 w-4/5 min-h-70"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    layout
                >
                    <AnimatePresence mode="wait">
                        {filtered.map((s) => (
                            <motion.div
                                key={s.name}
                                variants={itemVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                layout
                            >
                                <SkillCard skill={s} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.section>
    );
}


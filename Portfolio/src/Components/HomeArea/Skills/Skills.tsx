import {AnimatePresence, motion, useInView, Variants} from "framer-motion";
import "./Skills.css";
import {JSX, useRef, useState} from "react";
import {skills} from "../../../Datas/SkillsData.ts";
import {FaComputer} from "react-icons/fa6";
import {Code, Code2, Monitor} from "lucide-react";
import {FaCode} from "react-icons/fa";


export function Skills(): JSX.Element {

    const [openSkill, setOpenSkill] = useState<string | null>(null);

    const toggleSkill = (name: string) => {
        setOpenSkill(prev => (prev === name ? null : name));
    };

    const containerVariants: Variants = {
        hidden: {opacity: 0, y: 30},
        show: {opacity: 1, y: 0, transition: {staggerChildren: 0.1, when: 'beforeChildren'}}
    }

    const cardVariants: Variants = {
        hidden: {opacity: 0, scale: 0.9},
        show: {opacity: 1, scale: 1, transition: {duration: 0.4}}
    }

    const detailVariants: Variants = {
        hidden: {height: 0, opacity: 0},
        show: {height: 'auto', opacity: 1, transition: {duration: 0.3}}
    }

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, {once: true, margin: "0px 0px -200px 0px", amount: 0.2});

    return (
        <motion.section
            ref={ref}
            className="max-w-5xl mx-auto mt-16 mb-24 px-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
        >
            <div className="flex justify-center items-center gap-2 mb-8 text-[#10b981]">
                <Code className={""} size={45}/>
                <h2 className="text-3xl md:text-4xl font-bold text-center ">
                    My Skills
                </h2>
                <Code2 className={""} size={50}/>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map(({name, icon: Icon, color, details}) => (
                    <motion.div
                        key={name}
                        variants={cardVariants}
                        whileHover={{y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)'}}
                        className="relative bg-[#1f2937] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* Icon circle */}
                        <div
                            onClick={() => toggleSkill(name)}
                            className="flex items-center p-4 space-x-3"
                        >
                            <div
                                className="p-3 rounded-full"
                                style={{backgroundColor: color + '33'}}
                            >
                                <Icon size={32} color={color}/>
                            </div>
                            <h3 className="text-xl font-semibold text-white flex-grow">
                                {name}
                            </h3>
                            <span className="text-2xl text-white">
                {openSkill === name ? '−' : '+'}
              </span>
                        </div>

                        <AnimatePresence>
                            {openSkill === name && (
                                <motion.div
                                    variants={detailVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="p-4 pt-0 text-gray-300 bg-[#111827]"
                                >
                                    <ul className="list-disc list-inside space-y-1">
                                        {details.map((d, idx) => (
                                            <li key={idx}>{d}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

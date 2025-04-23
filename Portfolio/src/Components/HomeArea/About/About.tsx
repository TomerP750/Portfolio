import "./About.css";
import {JSX, useRef} from "react";
import {Skills} from "../Skills/Skills.tsx";
import {motion, useInView, Variants} from "framer-motion";
import {FaBriefcase, FaGraduationCap} from "react-icons/fa";
import {User} from "lucide-react";

export function About(): JSX.Element {

    const listVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.4, when: 'beforeChildren' } }
    };


    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 1.1 } }
    };

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" ,amount: 0.2 });



    return (
        <motion.section
            ref={ref}
            className="bg-[#0f172a] text-white py-20 flex flex-col items-center space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
        >
            {/* Section Title */}
            <motion.h2 variants={itemVariants} className="text-4xl font-bold">
                About
            </motion.h2>

            {/* Row 1: Profile */}
            <motion.div
                variants={itemVariants}
                className="flex-col sm:flex sm:flex-row items-center w-2/3 gap-8"
            >
                <motion.div
                    variants={itemVariants}
                    className="mb-8 sm:mb-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center"
                >
                    <User size={50} className="text-white" />
                </motion.div>
                <motion.div variants={itemVariants} className="text-base leading-relaxed w-3/4 space-y-2">
                    <p>
                        Hello! I’m Tomer, a Full Stack Developer who enjoys building modern
                        websites and applications
                    </p>
                    <p>
                        from concept to launch. I combine thoughtful design with solid
                        technical skills to turn ideas into
                    </p>
                    <p>
                        smooth, functional, and visually appealing digital products. I focus
                        on writing clean,
                    </p>
                    <p>
                        maintainable code and really enjoy working as part of a team to build
                        great solutions. Whether
                    </p>
                    <p>
                        it’s a personal project or a collaborative effort, I’m always aiming
                        to deliver quality work that
                    </p>
                    <p>meets real needs.</p>
                </motion.div>
            </motion.div>

            {/* Row 2: Education */}
            <motion.div
                variants={itemVariants}
                className="flex-col sm:flex-row sm:flex justify-between items-center w-2/3"
            >
                <motion.ul
                    variants={listVariants}
                    className="w-4/5 list-disc list-inside text-gray-300 space-y-2 flex flex-col items-end"
                >
                    {[
                        "High School — Student (2013–2016)",
                        "Army — Intelligence & Air Force (2016–2019)",
                        "Kidum — Psychometric (2021–2022)",
                        "John Bryce — Java Fullstack (Apr 2024–Jan 2025)",
                    ].map((text, index) => (
                        <motion.li
                            key={index}
                            variants={itemVariants}
                            className={index === 1 || index === 2 ? "mr-4" : ""}
                        >
                            {text}
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.div
                    variants={itemVariants}
                    className="mb-8 sm:mb-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center"
                >
                    <FaGraduationCap size={50} className="text-white" />
                </motion.div>
            </motion.div>

            {/* Row 3: Experience */}
            <motion.div
                variants={itemVariants}
                className="flex-col sm:flex sm:flex-row items-center w-2/3 gap-8"
            >
                <motion.div
                    variants={itemVariants}
                    className="mb-8 sm:mb-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center"
                >
                    <FaBriefcase size={50} className="text-white" />
                </motion.div>
                <motion.ul variants={listVariants} className="list-disc list-inside text-gray-300 space-y-2 w-3/4">
                    <motion.li variants={itemVariants}>
                        <strong>Nike</strong> — Employee (2022–2023)
                    </motion.li>
                </motion.ul>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="w-full mt-16 px-4">
                <Skills />
            </motion.div>
        </motion.section>
    );

}





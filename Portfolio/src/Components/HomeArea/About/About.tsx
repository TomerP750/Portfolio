import "./About.css";
import {JSX, useRef} from "react";
import {Skills} from "../Skills/Skills.tsx";
import {motion, useInView, Variants} from "framer-motion";
import {FaBriefcase, FaGraduationCap} from "react-icons/fa";
import {User} from "lucide-react";

export function About(): JSX.Element {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.4, when: 'beforeChildren' } }
    };

// Individual row animation
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });


    return (
        <motion.section
            ref={ref}
            className="bg-[#0f172a] text-white py-20 flex flex-col items-center space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
        >
            {/* Section Title */}
            <motion.h2 variants={itemVariants} className="text-4xl font-bold">
                About
            </motion.h2>

            {/* Row 1: Profile */}
            <motion.div variants={itemVariants} className="flex-col  sm:flex sm:flex-row items-center w-2/3 gap-8">
                {/*<img*/}
                {/*    src={profilePicture}*/}
                {/*    alt="Tomer"*/}
                {/*    className="mb-8 sm:mb-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border-4 border-[#10b981] object-cover"*/}
                {/*/>*/}

                <div
                    className="mb-8 sm:mb-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center">
                    <User className="size-10 sm:size-20 w-[150px]  text-white"/>
                </div>
                <div className="text-base leading-relaxed w-3/4">
                    <span> Hello! I’m Tomer, a Full Stack Developer who enjoys building modern websites and applications</span>
                    <span className={"block ml-2"}> from concept to launch. I combine thoughtful design with solid technical skills to turn ideas into</span>
                    <span className={"block ml-4"}> smooth, functional, and visually appealing digital products. I focus on writing clean,</span>
                    <span className={"block ml-4"}> maintainable code and really enjoy working as part of a team to build great solutions. Whether</span>
                    <span className={"block ml-2"}> it’s a personal project or a collaborative effort, I’m always aiming to deliver quality work that</span>
                    <span>meets real needs.</span>
                </div>
            </motion.div>

            {/* Row 2: Education (reversed layout) */}
            <motion.div variants={itemVariants}
                        className="flex-col sm:flex-row sm:flex justify-between items-center w-2/3">
                <ul className="w-4/5 flex flex-col items-end list-disc list-inside text-gray-300 space-y-2">
                    <li><strong>High School</strong> — Student (2013–2016)</li>
                    <li className={"mr-4"}><strong>Army</strong> — Intelligence & Air Force (2016–2019)</li>
                    <li className={"mr-4"}><strong>Kidum</strong> — Psychometric (2021–2022)</li>
                    <li><strong>John Bryce</strong> — Java Fullstack (Apr 2024–Jan 2025)</li>
                </ul>
                <div className="mb-8 sm:mb-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center">
                    <FaGraduationCap className="size-10 sm:size-20 w-[150px]  text-white" />
                </div>
            </motion.div>

            {/* Row 3: Experience */}
            <motion.div variants={itemVariants} className="flex-col  sm:flex sm:flex-row items-center w-2/3 gap-8">
                <div className="mb-8 sm:mb-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center">
                    <FaBriefcase className="size-10 sm:size-20 w-[150px]  text-white" />
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 w-3/4">
                    <li><strong>Nike</strong> — Employee (2022–2023)</li>
                </ul>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="w-full mt-16 px-4">
                <Skills/>
            </motion.div>
        </motion.section>
    );

}





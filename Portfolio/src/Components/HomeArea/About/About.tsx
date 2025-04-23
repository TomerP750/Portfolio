import "./About.css";
import {JSX, useRef} from "react";
import {Skills} from "../Skills/Skills.tsx";
import {motion, useInView, Variants} from "framer-motion";
import {FaBriefcase, FaGraduationCap} from "react-icons/fa";
import {User} from "lucide-react";
import image from "../../../assets/tomerimage.jpg"
import {educationData} from "../../../Datas/TimelineData.ts";

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
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {staggerChildren: 0.4, when: 'beforeChildren'}}
    };


    const itemVariants: Variants = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0, transition: {duration: 1.1}}
    };

    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, {once: true, margin: "0px 0px -100px 0px", amount: 0.2});


    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-[#0f172a] text-white py-12 px-4 sm:py-20 sm:px-8 lg:px-0 flex flex-col items-center space-y-8 sm:space-y-12"
        >
            {/* Section Title */}
            <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-center"
            >
                About
            </motion.h2>

            {/* Row 1: Profile */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center w-full sm:w-3/4 lg:w-2/3 gap-6 sm:gap-8"
            >
                <motion.div
                    variants={itemVariants}
                    className="flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center"
                >
                    <User size={40} className="text-white sm:!text-[50px]"/>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="w-full sm:w-3/4 text-base leading-relaxed space-y-2"
                >
                    <motion.span>
                        Hello! I’m Tomer, a Full Stack Developer who enjoys building modern
                        websites and applications
                    </motion.span>
                    <motion.span className="block ml-2">
                        from concept to launch. I combine thoughtful design with solid
                        technical skills to turn ideas into
                    </motion.span>
                    <motion.span className="block ml-4">
                        smooth, functional, and visually appealing digital products. I focus
                        on writing clean,
                    </motion.span>
                    <motion.span className="block ml-4">
                        maintainable code and really enjoy working as part of a team to build
                        great solutions. Whether
                    </motion.span>
                    <motion.span className="block ml-2">
                        it’s a personal project or a collaborative effort, I’m always aiming
                        to deliver quality work that
                    </motion.span>
                    <motion.span>
                        meets real needs.
                    </motion.span>
                </motion.div>
            </motion.div>

            {/* Row 2: Education */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col-reverse sm:flex-row items-center sm:justify-end w-full sm:w-3/4 lg:w-2/3 gap-6"
            >
                <motion.ul
                    variants={listVariants}
                    className="w-full sm:w-4/5 space-y-2"
                >
                    {educationData.map((item, idx) => {

                        const indent = idx === 1 || idx === 4 ? "mr-2" : idx === 2 || idx === 3 ? "mr-4" : "";

                        return (
                            <motion.li
                                key={idx}
                                variants={itemVariants}
                                className={`flex justify-end items-start space-x-2 ${indent}`}
                            >
        <span className="text-right text-gray-300">
          ({item.date}) — {item.role}{" "}
            <strong className="text-white">{item.companyOrInstitution}</strong>
        </span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full mt-1"/>
                            </motion.li>
                        );
                    })}
                </motion.ul>


                <motion.div
                    variants={itemVariants}
                    className="flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center"
                >
                    <FaGraduationCap size={40} className="text-white sm:!text-[50px]"/>
                </motion.div>
            </motion.div>

            {/* Row 3: Experience */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center w-full sm:w-3/4 lg:w-2/3 gap-6 sm:gap-8"
            >
                <motion.div
                    variants={itemVariants}
                    className="flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center"
                >
                    <FaBriefcase size={40} className="text-white sm:!text-[50px]"/>
                </motion.div>
                <motion.ul
                    variants={listVariants}
                    className="w-full sm:w-4/5 list-disc list-inside text-gray-300 space-y-2 flex flex-col items-center sm:items-start"
                >
                    <motion.li variants={itemVariants}>
                        <strong>Nike</strong> — Employee (2022–2023)
                    </motion.li>
                </motion.ul>
            </motion.div>

            {/* Skills Section */}
            <motion.div
                variants={itemVariants}
                className="w-full sm:w-3/4 lg:w-2/3 mt-12 px-2 sm:px-0"
            >
                <Skills/>
            </motion.div>
        </motion.section>
    );

}





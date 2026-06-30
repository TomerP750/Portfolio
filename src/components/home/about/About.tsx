import "./About.css";
import { JSX, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { LinkIcon, User } from "lucide-react";
import { educationData } from "../../../Datas/TimelineData.ts";
import { certificationsData } from "../../../Datas/CertificationsData.ts";
import { MdWorkspacePremium } from "react-icons/md";
import aboutImage from "../../../assets/aboutImage.png";
import { AboutModal } from "../about-modal/AboutModal.tsx";

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
    const inView = useInView(ref, { once: true, margin: "0px", amount: 0.1 });

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-[#191f2f] font-light text-white py-12 px-4 sm:py-20 sm:px-8 lg:px-0 flex flex-col items-center space-y-8 sm:space-y-12 gap-20 md:gap-10"
        >
            {/* Section Title */}
            <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-center"
            >
                <img src={aboutImage} alt={"about"} className={"w-full h-80"} />
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
                    <User size={50} className="text-white sm:!text-[50px]" />
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="w-3/4 sm:w-3/4 text-base leading-relaxed space-y-2"
                >
                    <motion.span>
                        Hello! I’m Tomer, a Full Stack Developer who enjoys building modern
                        websites and applications
                        from concept to launch. I combine thoughtful design with solid
                        technical skills to turn ideas into
                        smooth, functional, and visually appealing digital products. I focus
                        on writing clean,
                        maintainable code and really enjoy working as part of a team to build
                        great solutions. Whether
                        it’s a personal project or a collaborative effort, I’m always aiming
                        to deliver quality work that
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
                    className="w-full sm:w-4/5 flex flex-col items-center sm:items-end space-y-2"
                >
                    {educationData.map((item, idx) => (
                        <motion.li
                            key={idx}
                            variants={itemVariants}
                            className="flex justify-end items-center space-x-2"
                        >
                            <span className="text-sm sm:text-base text-center sm:text-right text-gray-300">
                                ({item.date}) {item.role} <strong className=""> — {item.companyOrInstitution}</strong>
                            </span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full mt-1" />
                        </motion.li>
                    ))}
                </motion.ul>


                <motion.div
                    variants={itemVariants}
                    className="flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center"
                >
                    <FaGraduationCap size={50} className="text-white sm:!text-[50px]" />
                </motion.div>
            </motion.div>

            {/* Experience */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center w-full sm:w-3/4 lg:w-2/3 gap-6 sm:gap-8"
            >
                <motion.div
                    variants={itemVariants}
                    className="flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center"
                >
                    <FaBriefcase size={50} className="text-white sm:!text-[50px]" />
                </motion.div>
                <motion.ul
                    variants={listVariants}
                    className="w-full sm:w-4/5 list-disc list-inside text-gray-300 space-y-2 flex flex-col items-center sm:items-start"
                >
                    <motion.li
                        className="flex flex-wrap justify-center lg:justify-start items-center gap-x-2 gap-y-1"
                        variants={itemVariants}
                    >
                        <strong className="shrink-0">Freelance -</strong>

                        <span className="min-w-0">
                            Built landing page for a natural medicine business.
                        </span>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://moshemedicalcenter.com"
                            className="inline-flex shrink-0 items-center gap-1 text-[#10b981] hover:opacity-80 transition duration-200 ease-in"
                        >
                            <LinkIcon size={15} />
                            <span>Website</span>
                        </a>
                    </motion.li>
                </motion.ul>
            </motion.div>


            {/*Certifications*/}

            {/* Certifications */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col-reverse sm:flex-row items-center sm:justify-end w-full sm:w-3/4 lg:w-2/3 gap-6"
            >
                <motion.ul
                    variants={listVariants}
                    className="w-full sm:w-4/5 flex flex-col items-center sm:items-end space-y-2"
                >
                    {certificationsData.map((item, idx) => (
                        <motion.li
                            key={idx}
                            variants={itemVariants}
                            className="flex justify-end items-center gap-2 cursor-pointer"
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >
                            <span className="text-sm sm:text-base text-center sm:text-right text-gray-300">
                                <strong className="font-light hover:underline">
                                    {item.name}
                                </strong>
                            </span>

                            <span className="w-2 h-2 bg-gray-300 rounded-full shrink-0" />
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                    variants={itemVariants}
                    className="flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-[#10b981] flex items-center justify-center"
                >
                    <MdWorkspacePremium size={50} className="text-white sm:!text-[50px]" />
                </motion.div>

                {modalOpen && (
                    <AboutModal onClose={() => setModalOpen(false)} />
                )}
            </motion.div>


        </motion.section>
    );

}





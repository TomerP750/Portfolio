import {motion, useScroll, useTransform} from "framer-motion";
import "./Hero.css";
import {JSX} from "react";
import {ArrowRight} from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

export function Hero(): JSX.Element {

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.section
            style={{ opacity, scale }}
            className="
                 items-center flex justify-center h-120 mb-10 lg:mb-0 lg:h-screen
                 will-change-transform will-change-opacity"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >

            <div className="flex justify-center w-full h-3/4">
                {/* Text Content */}
                <motion.div
                    className="w-full items-center flex flex-col md:items-center text-[#10b981] md:w-2/3 gap-10 md:gap-5"
                    variants={itemVariants}
                >
                    <motion.p
                        className="sm:text-left text-5xl md:text-7xl"
                        variants={itemVariants}
                    >
                        Welcome,
                    </motion.p>
                    <motion.p
                        className="text-neutral-100 text-5xl md:text-5xl"
                        variants={itemVariants}
                    >
                        I'm Tomer Jacob
                    </motion.p>
                    <motion.p className="text-white w-3/4" variants={itemVariants}>
                        I'm a passionate Full Stack Developer who creates modern, responsive websites and applications. Driven by curiosity, attention to detail, and a commitment to building digital experiences. Welcome to my portfolio.
                    </motion.p>
                    <motion.button
                        className="text-white flex items-center px-10 py-3 bg-[#10b981] rounded-full
                       cursor-pointer hover:bg-gray-500 transition duration-200 ease-in"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let’s Work Together
                        <ArrowRight className="ml-2 inline" />
                    </motion.button>
                </motion.div>


                {/*<motion.div*/}
                {/*    className="hidden min-[900px]:block w-1/2"*/}
                {/*    variants={itemVariants}*/}
                {/*>*/}
                {/*    <div className="w-full h-full bg-gray-600" />*/}
                {/*</motion.div>*/}
            </div>
        </motion.section>
    );

}

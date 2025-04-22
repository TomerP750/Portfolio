import { motion } from "framer-motion";
import "./Hero.css";
import {JSX} from "react";
import {ArrowRight} from "lucide-react";

export function Hero(): JSX.Element {

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
            className="bg-gradient-to-r from-[#0b1a3a] via-[#0f172a] to-[#0f172a] items-center flex justify-center h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex justify-center w-[90%] min-[900px]:justify-between h-3/4">
                {/* Text Content */}
                <motion.div
                    className="w-full items-center flex flex-col md:items-start text-[#10b981] md:w-[45%] gap-5"
                    variants={itemVariants}
                >
                    <motion.p
                        className="sm:text-left text-5xl sm:text-6xl md:text-7xl"
                        variants={itemVariants}
                    >
                        Welcome,
                    </motion.p>
                    <motion.p
                        className="text-neutral-100 sm:text-5xl md:text-6xl"
                        variants={itemVariants}
                    >
                        I'm Tomer Jacob
                    </motion.p>
                    <motion.p className="text-white" variants={itemVariants}>
                        I’m a passionate software developer specializing in crafting responsive,
                        intuitive, and engaging digital experiences. My expertise spans full-stack
                        development, including building robust backend systems and dynamic, beautiful
                        front-end interfaces. Let’s build something amazing together.
                    </motion.p>
                    <motion.button
                        className="text-white flex items-center px-10 py-3 bg-[#10b981] rounded-full cursor-pointer hover:bg-gray-500 transition duration-200 ease-in"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let’s Work
                        <ArrowRight className="ml-2 inline" />
                    </motion.button>
                </motion.div>

                {/* Image / Graphic Placeholder */}
                <motion.div className="hidden min-[900px]:block w-1/2" variants={itemVariants}>
                    <motion.div className="w-full h-full bg-gray-600" variants={itemVariants} />
                </motion.div>
            </div>
        </motion.section>
    )

}

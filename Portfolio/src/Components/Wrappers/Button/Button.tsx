import "./Button.css";
import {motion, Variants} from "framer-motion";
import {JSX} from "react";
import {FiExternalLink} from "react-icons/fi";
import {Project} from "../../../Models/Project.ts";
import {IconType} from "react-icons";

interface ButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    Icon?: IconType;
    className?: string;
    itemVariants?: Variants;
    children?: React.ReactNode;
}
export function Button({children ,Icon ,disabled, onClick, className, itemVariants}: ButtonProps): JSX.Element {

    return (
        <motion.p variants={itemVariants}>
            <button disabled={disabled} onClick={onClick}
                    className={`${className}`}>
                {Icon && <Icon size={25} className="transition duration-200 ease-in"/>}
                <p>{children}</p>
            </button>
        </motion.p>
    );
}

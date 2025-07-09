import { useEffect, useRef, useState } from "react";
import type { JSX } from "react";
import jbGrades from "../../../assets/JBGrades.jpeg";
// import jbCertifications from "../../../assets/JBCertifications.png";
import { BiX } from "react-icons/bi";
import { motion } from "framer-motion";

export type ModalType = "John Bryce Grades" | "John Bryce";

interface AboutModalProps {
  type: ModalType;
  onClose: () => void;
}

export function AboutModal({
  type,
  onClose,
}: AboutModalProps): JSX.Element | null {
  const [zoomed, setZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // lock page scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const { src, alt } =
    type === "John Bryce"
      ? { src: jbGrades, alt: "John Bryce Certifications" }
      : { src: jbGrades, alt: "John Bryce Grades screenshot" };

  // smaller zoom: 1 = no zoom, 1.15 = 15% bigger
  const ZOOM_SCALE = 1.15;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          bg-white
          rounded-lg
          p-4
          max-w-3xl
          max-h-[90vh]
          overflow-auto    
        "
      >
        <BiX
          size={30}
          className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={onClose}
        />

        <motion.img
          src={src}
          alt={alt}
          initial={false}
          animate={{ scale: zoomed ? ZOOM_SCALE : 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setZoomed((z) => !z)}
          className={`
            block mx-auto object-contain
            ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}
          `}
        />
      </div>
    </div>
  );
}

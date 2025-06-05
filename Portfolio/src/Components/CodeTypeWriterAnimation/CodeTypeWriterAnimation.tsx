// CodeTypewriterAnimation.tsx
import { useEffect, useState, useRef } from "react";

type CodeTypewriterAnimationProps = {
    /**
     * Array of lines to type out. Each element in the array
     * will appear on its own line (with a line break).
     */
    lines: string[];
    /**
     * How many milliseconds between typing each character.
     * e.g. 50 ⇒ 20 chars/sec, 100 ⇒ 10 chars/sec. Adjust to taste.
     */
    speed?: number;
};

export function CodeTypewriterAnimation({
                                            lines,
                                            speed = 75,
                                        }: CodeTypewriterAnimationProps) {
    // Combine all lines with newline characters
    const fullText = lines.join("\n");
    const totalLength = fullText.length;

    // Tracks how many characters have been "typed" so far
    const [currentIndex, setCurrentIndex] = useState(0);
    const completedRef = useRef(false);

    useEffect(() => {
        if (currentIndex >= totalLength) {
            if (!completedRef.current) {
                completedRef.current = true;
            }
            return;
        }

        const handle = window.setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
        }, speed);

        return () => window.clearTimeout(handle);
    }, [currentIndex, speed, totalLength]);

    // The portion of the string to display so far
    const typedSoFar = fullText.slice(0, currentIndex);

    return (
        <pre
            className="font-mono whitespace-pre-wrap break-words"
            style={{ margin: 0 }}
        >
      {typedSoFar}
    </pre>
    );
}

// import { useContext, createContext, useState, type ReactNode, useEffect, useMemo } from "react";


// type Theme = "dark" | "light";

// type ThemeState = {
//     theme: Theme
// };

// type ThemeContextValue = ThemeState & {
//     toggle: () => void
// };

// const ThemeContext = createContext<ThemeContextValue | null>(null);

// interface ThemeProviderProps {
//     children: ReactNode
// };

// const getInitialTheme = () => {

//     const stored = localStorage.getItem("theme") as Theme | null;
//     if (stored) return stored;

//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     return prefersDark ? "dark" : "light";
// }

// export function ThemeProvider({ children }: ThemeProviderProps) {

//     const [theme, setTheme] = useState<Theme>(getInitialTheme);

//     useEffect(() => {
//         localStorage.setItem("theme", theme);
//     }, [theme])

//     const toggle = () => {
//         setTheme((prev) => prev === "dark" ? "light" : "dark")
//     }

//     const ctx = useMemo(() => ({
//         theme, toggle
//     }), [theme]);

//     return (
//         <ThemeContext.Provider value={ctx}>
//             {children}
//         </ThemeContext.Provider>
//     )
// };

// export function useTheme() {
//     const ctx = useContext(ThemeContext);
//     if (!ctx) {
//         throw new Error("useTheme must be used within ThemeProvider");
//     }
//     return ctx;
// }

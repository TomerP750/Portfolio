import {createContext, ReactNode, useContext, useReducer} from "react";


type Theme = "light" | "dark";

type ThemeState = {
    theme: Theme;
}

const initialState: ThemeState = {
    theme: "dark",
}

type ThemeContextValue = ThemeState & {
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
    const themeContext = useContext(ThemeContext);

    if (themeContext === null) {
        throw new Error("Error");
    }

    return themeContext;
}

type ThemeContextProviderProps = {
    children: ReactNode;
}

type Action = {
    type: "dark" | "light";
    payload?: Theme;
}

function themeReducer(state: ThemeState, action: Action): ThemeState {
    switch (action.type) {
        case "dark":
            state.theme = "dark";
            break;
        case "light":
            state.theme = "light";
            break;
        default:
            return state;
    }
    return state;
}

export default function ThemeContextProvider({children}: ThemeContextProviderProps) {
    const [themeState, dispatch] = useReducer(themeReducer, initialState);


    const ctx: ThemeContextValue = {
        theme: themeState.theme,
        toggleTheme: () => {
            dispatch({type: themeState.theme === "dark" ? "light" : "dark"});
        },
    }
    return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>
}
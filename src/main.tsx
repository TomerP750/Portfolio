import {createRoot} from 'react-dom/client'
import './index.css'
import {Layout} from "./Components/Layout/Layout.tsx";
import {BrowserRouter} from "react-router-dom";
import ThemeContextProvider from "./Context/ThemeContext.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeContextProvider>
            <Layout/>
        </ThemeContextProvider>
    </BrowserRouter>,
)

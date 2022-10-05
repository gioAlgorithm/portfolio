import useLocalStorage from "use-local-storage"
import { createContext } from "react"

// using createContext to pass dark mode and light mode in every page
export const ThemeContext = createContext({
    theme: 'light',
    onThemeToggle: ()=>{},
});

export function ThemeContextProvider(props){
    const[theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    
    const SwitchTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
    
    return(
        <ThemeContext.Provider value={{theme, onThemeToggle: SwitchTheme}} >
            {props.children}
        </ThemeContext.Provider>
    )
}
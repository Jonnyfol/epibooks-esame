import './ThemeButton.css'
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function ThemeButton ({ changeTheme }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <button className={theme === "dark" ? "theme-dark-style" : "theme-light-style"} 
            onClick={changeTheme}>{theme === "dark" ? "light mode" : "dark mode"}</button>
        </div>
    )
}
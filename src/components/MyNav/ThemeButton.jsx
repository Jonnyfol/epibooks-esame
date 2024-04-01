import "./ThemeButton.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { HiSun, HiMoon } from "react-icons/hi2";

export default function ThemeButton({ changeTheme }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="ps-3">
      <button
        className={theme === "dark" ? "theme-dark-style" : "theme-light-style"}
        onClick={changeTheme}
      >
        {theme === "dark" ? <HiSun /> : <HiMoon />}
      </button>
    </div>
  );
}

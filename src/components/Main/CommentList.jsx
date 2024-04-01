import './CommentList.css'
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function CommentList () {
    const { theme } = useContext(ThemeContext);

    return <h1 className={theme === "dark" ? "text-light" : "text-dark"}>Comment</h1>
}
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import style from "../00_CSS/styles.module.css"
import SearchBar from "../SearchBar/SearchBar";

export default function Navegator (props) {
    return (
        
            <div className={style.navegador}>
                <NavLink to="/home" className={style.navlink}>Home</NavLink>
                <NavLink to="/favorite" className={style.navlink}>My Favorites</NavLink>
                <NavLink to="/about" className={style.navlink}>About</NavLink>
                <SearchBar
                    onSearch={props.onSearch}
                    className={style.navInput}
                />
            </div>
        
        
    )
}

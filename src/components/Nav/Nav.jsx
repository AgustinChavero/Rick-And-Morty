import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import style from "../00_CSS/styles.module.css"
import SearchBar from "../SearchBar/SearchBar";

export default function Navegator (props) {
    return (
        <Navegador>
            <NavLink to="/home" className={style.navlink}>Home</NavLink>
            <NavLink to="/favorite" className={style.navlink}>My Favorites</NavLink>
            <NavLink to="/about" className={style.navlink}>About</NavLink>
            <SearchBar
                onSearch={props.onSearch}
            />
        </Navegador>
    )
}

const Navegador = styled.nav `
    width: 90%;
    margin-left: 5%;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #0a0a0abb;
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
`
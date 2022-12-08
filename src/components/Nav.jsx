import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Navegador = styled.nav `
    width: 90%;
    margin-left: 5%;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #0a0a0abb;
    display: flex;
    justify-content: flex-end;
`

export default function Navegator (props) {
    return (
        <Navegador>
            <SearchBar
                onSearch={props.onSearch}
            />
        </Navegador>
    )
}
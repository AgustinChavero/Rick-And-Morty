import { useState } from "react";
import styled from "styled-components";

const Caja = styled.div `
   padding: 30px;
`
const Inputcito = styled.input `
   font-family: url("https://fonts.google.com/share?selection.family=Roboto");
   width: 100px;
   height: 30px;
   &:focus-visible {
      outline: none;
   }
`
const Botoncito = styled.button `
   width: 80px;
   height: 30px;
   background-color: #1b1b4c;
   color: white;
   border-style: none;
   border-radius: 3px;
   cursor: pointer;
   &:hover{
      background-color: #3f3f70;
   }
`

export default function SearchBar(props) {
   const [id, setId] = useState();
   const handleChange = (e) => {
      setId(e.target.value)
   }
   return (
      <Caja>
         <Inputcito 
            type='search' 
            onChange={handleChange}
            />
         <Botoncito 
            onClick={() => props.onSearch(id)}
         >Search</Botoncito>
      </Caja>
   );
}

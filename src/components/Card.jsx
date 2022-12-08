import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <Caja>
         <div style={{margin: "0px 20px", width:"30%"}}>
            <Fotito  src={props.image} alt="" />
         </div>
         <div>
            <Link to={`/detail/${props.id}`}><Name>{props.name}</Name></Link>
            <Letras>{props.species}</Letras>
            <Letras>{props.gender}</Letras>
         </div>
         <Botoncito onClick={() => props.onClose(props.id)}>X</Botoncito>
      </Caja>
   );
}

const Caja = styled.div `
   width: 600px;
   margin: 30px;
   align-items: center;
   display: flex;
   padding: 20px;
   background-color: #14381452;
   position: relative;
   margin-bottom: 20px;
   border-radius: 10px;
   border: 1px #193d1ba7 solid;
   backdrop-filter: blur(2px);
`
const Fotito = styled.img `
   border-radius: 5px;
   width: 100%;
`
const Name = styled.div `
   font-size: 40px;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   font-weight: bolder;
   text-shadow: rgb(53, 55, 56) 1px 1px 10px;
   text-align: center;
`
const Letras = styled.div `
   font-size: 20px;
   text-align: center;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   font-weight: bolder;
   text-shadow: rgb(53, 55, 56) 1px 1px 10px;
`
const Botoncito = styled.button `
   width: 60px;
   height: 40px;
   background-color: #1b1b4c;
   color: white;
   border-style: none;
   border-radius: 3px;
   position: absolute; //Para utilizar esto el padre tiene que tener position relative
   top: 10px;
   right: 10px;
   cursor: pointer;
   &:hover{
      background-color: #3f3f70;
   }
`
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.css";

export default function Detail () {
    
    const {detailId} = useParams();

    const [character, setCharacter] = useState ({})
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((err) => {
          window.alert("No hay personajes con ese ID");
        });
      return setCharacter({});
    }, [detailId]);

    return (
          <div>
            <div className={style.caja}>
              <div style={{margin: "0px 15px 10px 0px", width:"30%"}}>
                <img className={style.fotito} src={character.image} alt=""/>
              </div>
              <div className={style.info}>
                <h1 className={style.name}>{character.name}</h1>
                <h3 className={style.letras}>Specie: {character.species}</h3>
                <h3 className={style.letras}>Gender: {character.gender}</h3>
                <h3 className={style.letras}>Origin: {character.origin?.name}</h3>
                <h3 className={style.letras}>Ubication: {character.location?.name}</h3>
                <h3 className={style.letras}>Apparences: {character.episode?.length}</h3>
                <h3 className={style.letras}>Status: {character.status}</h3>
                <h3 className={style.letras}>Creation: {character.created}</h3>
              </div>
            </div>
          </div>
    )
}
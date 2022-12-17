import style from "../00_CSS/styles.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";

export default function Card(props) {
   const dispatch = useDispatch();
   const favorites = useSelector(state => 
      state.allCharacters
   );
   const [fav, setFavs] = useState(false)
   const onFav = () => {
      if (fav) {
         setFavs(false)
         dispatch(action.deletePJFav(props.id))
      } else {
         setFavs(true)
         dispatch(action.addPJFav(props))
      }
   }
   useEffect(() => {
      for (let i = 0; i < favorites.length ; i++) {
         if (favorites[i].id === props.id) {
            setFavs(true)
         }
      }}, [favorites])

   
   return (
      <div className={style.caja}>
         <div style={{margin: "0px 15px 10px 0px", width:"30%"}}>
            <img className={style.fotito}  src={props.image} alt="" />
         </div>
         <div className={style.info}>
            <Link to={`/detail/${props.id}`} className={style.name}>{props.name}</Link>
            <div className={style.letras}>Specie: {props.species}</div>
            <div className={style.letras}>Gender: {props.gender}</div>
            <div className={style.letras}>Origin: {props.origin}</div>
            <div className={style.letras}>Ubication: {props.location}</div>
            <div className={style.letras}>Appearances: {props.episode}</div>
            <div className={style.letras}>Status: {props.status}</div>
         </div>
         <button onClick={() => props.onClose(props.id)} className={style.botoncitoDelete}>X</button>
         <button onClick={() => onFav(props.id)} className={style.botoncitoFav}>{fav ? "💖": "🤍"}</button>
      </div>
   );
}

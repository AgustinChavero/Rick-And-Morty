import Perfil from "../../pefil.jpeg"
import abouts from "./abouts.module.css"

export default function About () {
    return (
        <div className={abouts.box}>
            <div>
                <img src={Perfil} alt="profile" className={abouts.photo}/>
            </div>
            <div className={abouts.infoCtn}>
                <h1 className={abouts.name}>Agustin Daniel Orellano Chavero</h1>
                <br/>
                <h3 className={abouts.info}>Originario de: Mendoza, Argentina.</h3>
                <br/>
                <p className={abouts.info}>Esta pagina fue hecha durante el Modulo 2, siendo el integrador de las homeworks que realizamos</p>
                <p className={abouts.info}>Aqui integramos todos nuestros conocimientos sobre React con todas las funciones que trae junto a todos los conocimientos previos de JS, mas CSS Modules y Styles Components.</p>
            </div>
        </div>
    )
}

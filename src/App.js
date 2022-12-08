import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";

import Nav from "./components/Nav.jsx";

import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Forms from "./components/Form/Forms";

import Logo from "./logo.png";

function App() {
  const ready = useLocation()

  const [characters, setCharacters] = useState([]);
  const [aparece, setAparece] = useState(false);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (characters.filter((e) => e.id === data.id).length) { //El len sirve como negacion, no es posible hacerlo de otra manera
            //De esta manera lo filtra y pregunta si ya existe mirando si es igual al data.id
            setAparece(true)
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
            setAparece(false)
          }
        }
         else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };
  const onClose = (event) => {
    setCharacters(characters.filter((e) => e.id !== event))
  }  

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const user = "user@gmail.com";
  const pass = "pass";

  function login (userData) {
    if (userData.password === pass && userData.username === user) {
        setAccess(true);
        navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <Home>
      <img src={Logo} alt="" />
      {ready.pathname === "/" ? null : <Nav onSearch={onSearch}/>}
      {aparece ? <Aviso>Tu personaje ya esta enlistado</Aviso> : false}
      <Routes>
        <Route exact path="/" element={<Forms login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
    </Home>
  );
}

export default App;

const Home = styled.div`
  min-height: 100vh;
  background-image: url("https://www.xtrafondos.com/descargar.php?id=5775&resolucion=2560x1440");
  background-attachment: fixed;
  background-size: cover;
  color: white;
  align-items: center;
  text-align: center;
`;
/* const Contenedor = styled.div`
  width: 90%;
  align-items: center;
  display: flex;
  flex-direction: row;
`; */
const Aviso = styled.span `
  color: white;
  font-size: 30px;
`
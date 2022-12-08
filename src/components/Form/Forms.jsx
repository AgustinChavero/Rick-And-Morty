import { useState } from "react";
import validation from "./validation.js";


export default function Forms (props) {
    const [userData, setUserData] = useState({ 
        username: '', password: '' 
    });
    const [errors, setErrors] = useState ({
        username: "",
        password: ""
    })
    const handleInputChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
        setErrors({...errors, ...validation({[e.target.name]: e.target.value})})
        console.log(errors)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (errors.username === "" && errors.password === "") {
            setUserData({
                username: "",
                password: ""
            })
            props.login({
                [e.target[0].name]: e.target[0].value,
                [e.target[1].name]: e.target[1].value
            })
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>User</label>
                    <input 
                        name='username' 
                        value={userData.username} 
                        onChange={handleInputChange} 
                        type='text'
                        placeholder='Escribe tu usuario...'
                    />
                <label>Password</label>
                    <input 
                        name='password' 
                        value={userData.password} 
                        onChange={handleInputChange} 
                        type='password'
                        placeholder='Escribe tu contraseña...'
                    />
                <button></button>
            </form>
        </div>
    )
}
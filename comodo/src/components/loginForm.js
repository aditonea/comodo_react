import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export default function LoginForm() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })
    const [loginErr, setLoginErr] = useState(false)
    const navigate = useNavigate()

    function handleLogin(e) {
        let data = e.target
        setLoginData(prevState => {
            return {
                ...prevState,
                [data.name]: data.value
            }
        })
    }

    function handleError() {
        setLoginErr(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoginErr(false)
        }, 4000)
    }, [loginErr])

    function login(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, loginData.username, loginData.password)
            .then(() => navigate("/dashboard"))
            .catch((err) => handleError())

    }

    return (
        <div className="modal__login">
            <div className="modal__login-image"></div>
            <div className="modal__login-form">
                <h1>comodo</h1>
                <form>
                    <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleLogin}
                        placeholder="Email">
                    </input>

                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLogin}
                        placeholder="Parola">
                    </input>

                    <button
                        onClick={login}
                    >LOGIN
                    </button>
                </form>
                {loginErr && <p>Emailul sau parola incorecte!</p>}
            </div>
        </div>
    )
}
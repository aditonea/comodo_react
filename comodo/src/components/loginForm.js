import React, { useState, useEffect } from "react";

export default function LoginForm() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })
    const [logged, setLogged] = useState(false)

    function handleLogin(e) {
        let data = e.target
        setLoginData(prevState => {
            return {
                ...prevState,
                [data.name]: data.value
            }
        })
    }

    // function checkLogin(e) {
    //     e.preventDefault()
    //     setLogged(loginData.username === "admin" && loginData.password === "admin")
    // }





    return (
        <div className="modal--login">
            <div className="modal--login-image"></div>
            <div className="modal--login-form">
                <h1>comodo</h1>
                <form>
                    <input type="text" name="username" value={loginData.username} onChange={handleLogin} placeholder="Username"></input>
                    <input type="password" name="password" value={loginData.password} onChange={handleLogin} placeholder="Password"></input>
                    <button
                    // onClick={checkLogin}
                    >LOGIN</button>
                </form>
            </div>
        </div>
    )
}
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import UserDetails from "../components/UserDetails"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginMsg, setLoginMsg] = useState("")

    const login = (e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/login", {
            username: username,
            password: password
        })
            .then(() => {
                setIsLoggedIn(true)
                setLoginMsg("Logged in!")
            })
            .catch(() => setLoginMsg("Login failed."))
    }

    return (
        <main>
            <section>
                <h1>Login page</h1>
                <UserDetails 
                    usernameChange={setUsername}
                    passwordChange={setPassword}
                    submitAction={login}
                    text="Login!"
                />
                <p>{loginMsg}</p>
                <p>
                    Don't have an account? Register 
                    <Link to="/register">here</Link>
                </p>
            </section>
        </main>
    );
}

export default Login;
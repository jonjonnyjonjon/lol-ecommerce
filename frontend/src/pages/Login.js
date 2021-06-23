import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

import UserDetails from "../components/UserDetails"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    let history = useHistory()

    const login = (e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/auth/login", {
            username: username,
            password: password
        })
            .then(res => {
                if (res.data.error) {
                    setErrorMsg(res.data.error);
                } else {
                    sessionStorage.setItem("token", res.data.token)
                    sessionStorage.setItem("username", res.data.username)
                    history.push("/")
                }
            })
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
                <p>{errorMsg}</p>
                <p>
                    Don't have an account? Register 
                    <Link to="/register">here</Link>
                </p>
            </section>
        </main>
    );
}

export default Login;
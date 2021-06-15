import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import UserDetails from "../components/UserDetails"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <main>
            <section>
                <h1>Login page</h1>
                <UserDetails />
                <p>
                    Don't have an account? Register 
                    <Link to="/register">here</Link>
                </p>
            </section>
        </main>
    );
}

export default Login;
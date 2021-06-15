import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import UserDetails from "../components/UserDetails"

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <main>
            <section>
                <h1>Registration page</h1>
                <UserDetails />
                <p>
                    Don't have an account? Register 
                    <Link to="/register">here</Link>
                </p>
            </section>
        </main>
    );
}

export default Register;
import { useState } from "react"
import axios from "axios"
import UserDetails from "../components/UserDetails"

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const register = () => {
        axios.post("http://localhost:5000/register", {
            username: username,
            password: password
        })
            .then(res => console.log(res))
    }

    return (
        <main>
            <section>
                <h1>Registration page</h1>
                <UserDetails 
                    usernameChange={setUsername}
                    passwordChange={setPassword}
                    submitAction={register}
                    text="Register!"
                />
            </section>
        </main>
    );
}

export default Register;
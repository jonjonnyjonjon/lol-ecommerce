import { useState } from "react"
import axios from "axios"
import UserDetails from "../components/UserDetails"

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isRegistered, setIsRegistered] = useState("")

    const register = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/auth/registration", {
            username: username,
            password: password
        })
            .then(res => {
                if (res.data.error) {
                    setIsRegistered("Username exists, please try again.")
                } else {
                    setIsRegistered("Registration successful, please proceed to login.")
                }
            })
            .catch(err => console.log(err))
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
                <p>
                    {isRegistered}
                </p>
            </section>
        </main>
    );
}

export default Register;
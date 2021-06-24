import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "grey"
}

const NavUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
`
const linkStyle = {
    display: "inline-block",
    padding: "1rem",
    textDecoration: "none",
    color: "white"
}

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setIsLoggedIn(true)
        }
    }, [])

    return(
        <nav style={navStyle}>
            <NavUl>
                <li><Link to="/" style={linkStyle}>Home</Link></li>
                <li><Link to="/cart" style={linkStyle}>Cart</Link></li>
            </NavUl>

            {isLoggedIn ?
                <div>
                    <div style={linkStyle}>
                        Welcome {sessionStorage.getItem("username")}!
                    </div>
                    <div style={linkStyle}>
                        Logout
                    </div>
                </div>
                :
                <Link to="/login" style={linkStyle}>Login</Link>
            }
        </nav>
    )
}

export default Navbar
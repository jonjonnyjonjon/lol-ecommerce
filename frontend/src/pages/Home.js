import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Searchbar from "../components/Searchbar"
import ItemsContainer from "../components/ItemsContainer"
import ItemCard from "../components/ItemCard"

function Home() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [items, setItems] = useState([])
    const [searchKeyword, setSearchKeyword] = useState("")
    

    useEffect(() => {
        axios.get("http://localhost:5000/items")
            .then((response) => {
                setItems(response.data)
            })
    }, [])

    const filterItems = (e) => {
        e.preventDefault()

        axios.get(`http://localhost:5000/items/${searchKeyword}`)
            .then((response) => {
                setItems(response.data)
            })
    }

    return (
        <main>
            <section>
                <h1>Welcome to League of Legends e-commerce shop</h1>
                <Link to="/login"><button>Login</button></Link>
                <Searchbar submit={filterItems} change={setSearchKeyword}/>
    
                <ItemsContainer>
                    { items.map(item => 
                        <ItemCard
                        key={item.product_id}
                        item={item}
                        ></ItemCard>
                    )} 
                </ItemsContainer> 
            </section>
        </main>
    );
}

export default Home;
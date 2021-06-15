import { useState, useEffect } from "react"
import axios from "axios"
import ItemsContainer from "../components/ItemsContainer"
import ItemCard from "../components/ItemCard"
import Row from "react-bootstrap/Row"

function App() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/items")
            .then((response) => {
                setItems(response.data)
            })
    }, [])

    return (
        <main>
            <section>
                <h1>this is home</h1>
                <ItemsContainer>
                    <Row xs={1} md={2} className="g-4">
                        {items.map(item => 
                            <ItemCard
                            key={item.product_id}
                            item={item}
                            ></ItemCard>
                        )} 
                    </Row>
                </ItemsContainer>
            </section>
        </main>
    );
}

export default App;
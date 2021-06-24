import { useState, useEffect } from "react"
import axios from "axios"

import ItemsContainer from "../components/ItemsContainer"
import CartItemCard from "../components/CartItemCard"

function Cart() {
    const [userCartItems, setUserCartItems] = useState([])

    useEffect(() => {
        axios.post("http://localhost:5000/cart", 
            { username: sessionStorage.getItem("username") }
        )
            .then(res => setUserCartItems(res.data.items))
            .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <section>
                <h1>Your Cart</h1>
                
                <ItemsContainer>
                    { userCartItems.map(cartItem => 
                        <CartItemCard
                        key={cartItem.item_id}
                        item={cartItem}
                        ></CartItemCard>
                    )} 
                </ItemsContainer> 
            </section>
        </main>
    );
}

export default Cart;
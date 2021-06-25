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

    const clearCart = () => {
        axios.post("http://localhost:5000/cart/removeCart", {
            "username": sessionStorage.getItem("username")
        })
            .then(() => alert("Your cart has been cleared!"))
            .catch(err => alert(err))
    }

    return (
        <main>
            <section>
                <h1>Your Cart</h1>
                <button onClick={clearCart}>Clear cart</button>
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
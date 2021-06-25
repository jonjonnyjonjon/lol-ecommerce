import axios from "axios"
import styled from "styled-components"

const Card = styled.div`
    border: 3px solid red;
    background: grey;
`

const CartItemCard = ({ item }) => {
    const removeCartItem = (item_id) => {
        
    }

    return(
        <Card>
            <img src={item.img_url} alt={item.item_name}/>
            <ul>
                <li>Item name: {item.item_name}</li>
                <li>Item price per unit: {item.price}</li>
                <li>Quantity in cart: {item.quantity}</li>
            </ul>
            <button onClick={() => removeCartItem(item.item_id)}>Remove item</button>
        </Card>
    )
}

export default CartItemCard
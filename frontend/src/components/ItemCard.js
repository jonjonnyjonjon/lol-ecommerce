import axios from "axios"
import Button from "react-bootstrap/button"
import styled from "styled-components"

const Card = styled.div`
    border: 3px solid red;
    background: grey;
`

const ItemCard = ({ item }) => {

    const addToCart = (item_id) => {
        axios.post("http://localhost:5000/cart/add", {
            "username": sessionStorage.getItem("username"),
            "item_id": item_id
        })
            .then(() => alert("item added!"))
    }

    return(
        <Card>
            <img src={item.img_url} alt={item.item_name}/>
            <ul>
                <li>{item.item_name}</li>
                <li>{item.price}</li>
            </ul>
            <Button variant="primary" onClick={()=> {addToCart(item.item_id)}}>
                Add To Cart!
            </Button>
        </Card>
    )
}

export default ItemCard
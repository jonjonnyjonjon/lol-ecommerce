import Button from "react-bootstrap/button"
import styled from "styled-components"

const Card = styled.div`
    border: 3px solid red;
    background: grey;
`

const ItemCard = ({ item }) => {

    return(
        <Card>
            <img src={item.img_url} alt={item.product_name}/>
            <ul>
                <li>{item.product_name}</li>
                <li>{item.price}</li>
            </ul>
            <Button variant="primary">Go somewhere</Button>
        </Card>
    )
}

export default ItemCard
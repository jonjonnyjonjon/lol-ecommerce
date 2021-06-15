import Card from "react-bootstrap/card"
import Button from "react-bootstrap/button"

const ItemCard = ({ item }) => {

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img_url} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {item.product_name} <br/>
                    {item.price}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
      </Card>
    )
}

export default ItemCard
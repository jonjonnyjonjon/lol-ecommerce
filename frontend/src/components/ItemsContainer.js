import Container from "react-bootstrap/Container"

const ItemsContainer = ({ children }) => {
    return(
        <Container fluid>
            { children }
        </Container>
    )
}

export default ItemsContainer
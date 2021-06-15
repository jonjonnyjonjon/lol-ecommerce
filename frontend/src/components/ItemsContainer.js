import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    background-color: #1F2833;
    margin: auto;
    padding: 1rem;
    border-radius: 10px;
    max-height: 70vh;
    overflow-y: auto;
    width: 100%;
`;

const ItemsContainer = ({ children }) => {

    return(
        <Container>
            { children }
        </Container>
    )
}

export default ItemsContainer
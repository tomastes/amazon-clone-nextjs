import styled from "styled-components";
const ProductsFeed = ({ products }) => {
  return (
    <Container>
      {products.map((item) => (
        <Item key={item.id}>
          <Category>{item.category}</Category>
          <ItemImage src={item.image} />
          <Title>{item.title}</Title>
          <Price>{item.price}</Price>
          <ButtonAddToBasket>add to basket</ButtonAddToBasket>
        </Item>
      ))}
    </Container>
  );
};

export default ProductsFeed;

const Container = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const Item = styled.div`
  background-color: white;
  padding: 0.1rem 0.5rem;
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 18rem;
`;
const Category = styled.p`
  text-align: right;
  color: gray;
`;
const Title = styled.div`
  margin-bottom: 15px;
  padding: 5px 0 0 5px;
`;
const Price = styled.p``;
const ItemImage = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 18px;
`;
const ButtonAddToBasket = styled.button`
  background-color: #febd68;
  border: none;
  width: 60%;
  margin-left: 20%;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
  margin-bottom: 7px;
  font-size: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

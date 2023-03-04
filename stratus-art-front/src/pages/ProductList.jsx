import React from "react";
import styled from "styled-components";
import ProductsList from "../components/productlist/productslist";

const ProductList = () => {
  return (
    <Container>
      <ProductsList />
    </Container>
  );
};

const Container = styled.div`
  margin: 5rem 0 0 0;
`;

export default ProductList;

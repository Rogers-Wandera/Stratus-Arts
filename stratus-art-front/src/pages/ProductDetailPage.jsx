import React from "react";
import styled from "styled-components";
import ProductDetail from "../components/productdetails/productdetail";

const ProductDetailPage = () => {
  return (
    <Container>
      <ProductDetail />
    </Container>
  );
};

const Container = styled.div`
  margin: 5rem 0 0 0;
`;

export default ProductDetailPage;

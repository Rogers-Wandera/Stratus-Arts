import React from "react";
import styled from "styled-components";
import { categories } from "../../dammy";
import CategoryItem from "./shared/categoryItem";

const Category = () => {
  return (
    <div>
      <h4
        className="mt-2 mb-5"
        style={{
          marginLeft: "1rem",
          color: "orange",
          fontSize: "30px",
          fontWeight: "500",
        }}
      >
        <strong>Top Categories</strong>
      </h4>
      <Container>
        {categories.map((item) => {
          return <CategoryItem item={item} key={item.id} />;
        })}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
`;

export default Category;

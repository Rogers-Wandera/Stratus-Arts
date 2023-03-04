import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../dammy";
import SingleProduct from "./product";
import Slider from "react-slick";

const length = popularProducts.length;
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: length >= 4 ? 4 : length,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: length >= 3 ? 3 : length,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FlashDeals = () => {
  return (
    <Container>
      <h4
        className="mt-2 mb-5"
        style={{
          marginLeft: "1rem",
          color: "orange",
          fontSize: "30px",
          fontWeight: "500",
        }}
      >
        <strong>Flash Deals</strong>
      </h4>
      <Slider {...settings}>
        {popularProducts.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  padding: 15px;
`;

export default FlashDeals;

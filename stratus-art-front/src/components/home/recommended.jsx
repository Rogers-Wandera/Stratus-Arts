import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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
export default function Recommended() {
  return (
    <div>
      <h4
        className="mt-1 mb-0"
        style={{
          marginLeft: "1rem",
          color: "orange",
          fontSize: "30px",
          fontWeight: "500",
        }}
      >
        <strong>Recommended Products</strong>
      </h4>
      <Slider {...settings}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={12} sm={8} md={3} key={index}>
            <div class="product-card">
              <div class="badge">30% off</div>
              <div class="product-tumb">
                <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
              </div>
              <div class="product-details">
                <h5>
                  <a href=".">Women leather bag</a>
                </h5>
                <div class="product-bottom-details">
                  <div class="product-price">
                    <small>$96.00</small>$230.99
                  </div>
                  <div class="product-links">
                    <a href=".">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href=".">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Slider>
    </div>
  );
}

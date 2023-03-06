import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Slider from "react-slick";
import { popularProducts } from "../../dammy";

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

function HighDiscounts() {
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4
        className="mt-2 mb-5"
        style={{
          marginLeft: "1rem",
          color: "orange",
          fontSize: "30px",
          fontWeight: "500",
          textAlign: "left",
        }}
      >
        <strong>Higher Discounts</strong>
      </h4>
      <MDBRow>
        <Slider {...settings}>
          {popularProducts.map((cat) => {
            return (
              <MDBCol md="12" lg="4" className="mb-4" key={cat.id}>
                <MDBCard style={{ marginRight: "20px" }}>
                  <MDBCardImage src={cat.img} fluid className="w-100" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                  </a>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">Product name</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>Category</p>
                    </a>
                    <h6 className="mb-3">$61.99</h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </Slider>
      </MDBRow>
    </MDBContainer>
  );
}

export default HighDiscounts;

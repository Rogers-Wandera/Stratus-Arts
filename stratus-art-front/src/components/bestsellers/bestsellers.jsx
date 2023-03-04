import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { StarRate } from "@mui/icons-material";
import Slider from "react-slick";
import { categories } from "../../dammy";

const length = categories.length;
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

function BestSellers() {
  return (
    <MDBContainer fluid className="my-5">
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
        <strong>Best Sellers</strong>
      </h4>
      <MDBRow>
        <Slider {...settings}>
          {categories.map((cat) => {
            return (
              <MDBCol md="12" lg="4" className="mb-4 mb-lg-0" key={cat.id}>
                <MDBCard style={{ marginRight: "20px" }}>
                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Today's Combo Offer</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <p className="text-white mb-0 small">x4</p>
                    </div>
                  </div>
                  <MDBCardImage src={cat.img} position="top" alt="Laptop" />
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          Paintings
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>$1099</s>
                      </p>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{cat.title}</h5>
                      <h5 className="text-dark mb-0">$999</h5>
                    </div>

                    <div class="d-flex justify-content-between mb-2">
                      <p class="text-muted mb-0">
                        Available: <span class="fw-bold">6</span>
                      </p>
                      <div class="ms-auto text-warning">
                        <StarRate />
                        <StarRate />
                        <StarRate />
                        <StarRate />
                      </div>
                    </div>
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

export default BestSellers;

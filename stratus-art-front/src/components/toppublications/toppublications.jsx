import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import Slider from "react-slick";
import image1 from "../../assests/dammy/dammy9.jpg";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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

function TopPublications() {
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
        <strong>Top Publications</strong>
      </h4>
      <Slider {...settings}>
        {Array.from(Array(3)).map((_, i) => {
          return (
            <MDBCard style={{ maxWidth: "540px" }} key={i}>
              <MDBRow className="g-0">
                <MDBCol md="4">
                  <MDBCardImage src={image1} alt="..." fluid />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </MDBCardText>
                    <MDBCardText>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          );
        })}
      </Slider>
    </MDBContainer>
  );
}

export default TopPublications;

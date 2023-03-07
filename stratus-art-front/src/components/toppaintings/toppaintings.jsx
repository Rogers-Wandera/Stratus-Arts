import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import image1 from "../../assests/dammy/dammy10.jpg";
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

function TopPaintings() {
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
        <strong>Featured Paintings</strong>
      </h4>

      <MDBRow>
        {
          <Slider {...settings}>
            {Array.from(Array(6)).map((_, i) => {
              return (
                <MDBCol md="12" lg="4" className="mb-4" key={i}>
                  <div style={{ marginRight: "20px" }}>
                    <img
                      src={image1}
                      fluid="true"
                      alt="prod"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                      >
                        <div className="d-flex justify-content-start align-items-start h-100">
                          <h5>
                            <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                              $123
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                </MDBCol>
              );
            })}
          </Slider>
        }
      </MDBRow>
    </MDBContainer>
  );
}

export default TopPaintings;

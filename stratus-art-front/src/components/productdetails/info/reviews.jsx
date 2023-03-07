import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ProductReviews() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 text-dark" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10" xl="8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h4" className="text-dark mb-0">
                Product Reviews
              </MDBTypography>
              <MDBCard>
                <MDBCardBody className="p-3 align-items-center">
                  <MDBBtn className="p-2">Add a review</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>

            <MDBCard className="mb-3">
              <MDBCardBody>
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                    alt="avatar"
                    style={{ width: "100px", height: "100px" }}
                  />

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <MDBTypography
                        tag="h6"
                        className="text-primary fw-bold mb-0"
                      >
                        lara_stewart
                        <span className="text-dark ms-2">
                          Hmm, This poster looks cool
                        </span>
                      </MDBTypography>
                      <p className="mb-0">2 days ago</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="small mb-0" style={{ color: "#aaa" }}></p>
                      <div className="d-flex flex-row">
                        <MDBIcon fas icon="star text-warning me-2" />
                        <MDBIcon fas icon="star text-warning me-2" />
                        <MDBIcon fas icon="star text-warning me-2" />
                        <MDBIcon fas icon="star text-warning me-2" />
                        <MDBIcon
                          far
                          icon="check-circle"
                          style={{ color: "#aaa" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

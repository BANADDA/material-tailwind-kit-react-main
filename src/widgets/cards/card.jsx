import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

export function Register() {
  return (
    <MDBContainer
      fluid
      className="background-radial-gradient overflow-hidden p-4"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-md-start d-flex flex-column justify-content-center text-center"
        >
          <h1
            className="display-3 fw-bolder ls-tight my-3 px-3"
            style={{ color: "hsl(0, 100%, 50%)" }}
          >
            GDSC <br />
            <span style={{ color: "	hsl(120, 100%, 50%)" }}>UCU </span>{" "}
            <span style={{ color: "	hsl(180, 100%, 50%)" }}> Chapter</span>
          </h1>

          <p className="px-3 fw-bold" style={{ color: "hsl(0,0%,100%)"}}>
            GDSC UCU Chapter is all about using technology to create positive
            change in the world. By becoming a member, you'll be part of a
            community that's dedicated to making a difference through
            technology, whether that's by building apps to solve real-world
            problems or by contributing to open-source projects.
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="bg-glass my-5">
            <MDBCardBody className="p-5">
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form2"
                    type="text"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form3"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="I agree to the terms and conditions "
                />
              </div>

              <MDBBtn className="w-100 mb-4" size="md">
                sign up
              </MDBBtn>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;

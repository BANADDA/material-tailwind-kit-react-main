import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { auth } from "@/firebase";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { auth } from "@/firebase";
import { registerWithEmailAndPassword } from "@/firebase";
import { signInWithGoogle } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
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
  MDBFile,
} from "mdb-react-ui-kit";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(false); // create a state variable for tracking registration
  const [isSubmitted, setIsSubmitted] = useState(false); // create a state variable for tracking submission
  // const handleSignup = () => {
  //   if (!name) {toast.error("Please enter name")};
  //   registerWithEmailAndPassword(name, email, password);
  //   if (!email) {toast.error("Please enter email")};
  //   registerWithEmailAndPassword(name, email, password);
  // };

  useEffect(() => {
    async function registerWithEmailAndPassword(email, password) {
      try {
        await registerWithEmailAndPassword(email, password);
        // navigate("/login", { state: { message: "Signup successful!" } }); // remove this line
        setIsRegistered(true); // set isRegistered to true when the function resolves successfully
      } catch (error) {
        toast.error(error.message);
      }
    }
  
    // only call the function if the user has submitted the form
    if (isSubmitted) {
      registerWithEmailAndPassword(email, password);
    }
  }, [email, password, isSubmitted]); // add isSubmitted as a dependency
  
  useEffect(() => {
    // only navigate to the login route if the user has registered successfully
    if (isRegistered) {
      navigate("/login", { state: { message: "Signup successful!" } }); // pass a message in the state
    }
  }, [isRegistered]); // add isRegistered as a dependency

  // const handleSignup = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await registerWithEmailAndPassword(email, password);
  //     toast.success('Signup successful!');
  //     navigate('/login');
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };
  return (
  <>
  <ToastContainer/>
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

          <p className="fw-bold px-3" style={{ color: "hsl(0,0%,100%)" }}>
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
      {/* <MDBFile wrapperClass="mb-4" label='Upload Image' id='customFile' className="mb-4" value={image} onChange={(e) => setImage(e.target.value)} /> */}
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="I agree to the terms and conditions "
                />
              </div>

              <MDBBtn
                className="w-100 mb-4"
                size="md"
                onClick={() => setIsSubmitted(true)}
                //  onClick={onSubmit}
              >
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
                  onClick={signInWithGoogle}
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
 </> 
 );
}

export default Register;

import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
// import { useLocation } from "react-router-dom"; // import the useLocation hook
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBCardText,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const login = () => {

    if (!password) {
      toast.error("Please enter password");
      return;
    }
    if (!email) {
      toast.error("Please enter password");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    logInWithEmailAndPassword(email, password);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // navigate to home if user is logged in
        navigate("/home");
      }
      if(!user) {
        // show error message and stay on login page if user account not found
        toast.error("Account not found");
      }
    });
  };

  // const { state } = useLocation(); // get the state from the location object

  // // ...
  
  // useEffect(() => {
  //   // display the message with toast if it exists
  //   if (state && state.message) {
  //     toast.success(state.message);
  //   }
  // }, [state]); // add state as a dependency

  return (
    <>
      <ToastContainer />
      <section className="relative ml-0 flex h-screen content-center items-center justify-center pb-5 pt-16 text-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <MDBContainer fluid>
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12">
                  <MDBCard
                    className=" mx-auto my-5"
                    style={{ borderRadius: "1rem", maxWidth: "500px" }}
                  >
                    <MDBCardBody className="w-100 d-flex flex-column px-5 py-3">
                      <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                      <p className="text-white-50 mb-3">
                        Please enter your Email and password!
                      </p>

                      <MDBInput
                        wrapperClass="mb-4 w-100"
                        label="Email address"
                        id="emailID"
                        type="email"
                        size="sm"
                        value={email}
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <MDBInput
                        wrapperClass="mb-4 w-100"
                        label="Password"
                        id="passwordID"
                        type="password"
                        size="sm"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <MDBBtn
                        size="sm"
                        onClick={login}
                      >
                        Login
                      </MDBBtn>

                      <hr className="my-2" />

                      <MDBBtn
                        className="w-100 mb-2"
                        size="sm"
                        style={{ backgroundColor: "#dd4b39" }}
                      >
                        <MDBIcon
                          fab
                          icon="google"
                          className="mx-2"
                          onClick={signInWithGoogle}
                        />
                        Sign in with google
                      </MDBBtn>
                      <MDBCardText>
                        <Link to="/reset">Forgot Password</Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;

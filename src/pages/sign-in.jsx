import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/firebase";
import { NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { auth} from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
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
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from 'react-toastify';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const signin = () => {
    if (!password) {toast.error("Please enter password")};
    if (!email) {toast.error("Please enter email")};
    signInWithEmailAndPassword(email, password);
    navigate('/home')
    // if (!password) {toast.error("Please enter password")};
    // registerWithEmailAndPassword(name, email, password);
  };
  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const onLogin = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //       .then((response) => {
  //         navigate('/home')
  //         sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
  //       })
  //       .catch((error) => {
  //         console.log(error.code)
  //         if (error.code === 'auth/missing-password') {
  //           toast.error('Missing password');
  //         }
  //         if (error.code === 'auth/invalid-email') {
  //           toast.error('Must provide email');
  //         }
  //         if (error.code === 'auth/user-not-found') {
  //           toast.error('User not found. Please check the Email');
  //         }
  //       })
  // };

  // useEffect(() => {
  //   let authToken = sessionStorage.getItem('Auth Token')

  //   if (authToken) {
  //     navigate('/home')
  //   }
  // }, [])

  return (
    <>
    <ToastContainer/>
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
                        // onChange={(e) => setEmail(e.target.value)}
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
                        // onChange={(e) => setPassword(e.target.value)}
                      />

                      <MDBCheckbox
                        name="flexCheck"
                        id="flexCheckDefault"
                        className="mb-4"
                        label="Remember password"
                      />

                      <MDBBtn 
                       size="sm"
                      //  onClick={onLogin}
                      onClick={() => signin(email, password)}
                       >Login
                       </MDBBtn>

                      <hr className="my-2" />

                      <MDBBtn
                        className="w-100 mb-2"
                        size="sm"
                        style={{ backgroundColor: "#dd4b39" }}
                      >
                        <MDBIcon fab icon="google" className="mx-2" onClick={signInWithGoogle} />
                        Sign in with google
                      </MDBBtn>
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

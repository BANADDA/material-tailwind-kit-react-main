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
  MDBTextArea,
  MDBFile,
  MDBRadio,
} from "mdb-react-ui-kit";

import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeZGQSuwdhdSYoQlO2lBXj6JubvNp-t1c",
  authDomain: "data-science-ddebd.firebaseapp.com",
  projectId: "data-science-ddebd",
  storageBucket: "data-science-ddebd.appspot.com",
  messagingSenderId: "516618929749",
  appId: "1:516618929749:web:3d346e6f6bcf89df8936dc",
  measurementId: "G-YXCFBR7STJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

const AppForm = () => {
  // Use state hooks to store the values of each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");

  // Handle form submit
  function handleFormSubmit(e) {
    e.preventDefault();

    // Create a reference to the "users" node
    const usersRef = ref(database, "users");

    // Create a new user object with the input values
    const newUser = {
      firstName,
      lastName,
      email,
      bio,
      affiliation,
      program,
      year,
    };

    // Push the new user object to the database
    push(usersRef, newUser);

    // Clear the form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setBio("");
    setAffiliation("");
    setProgram("");
    setYear("");
  }

  // Render the form component

  return (
    <MDBContainer
      fluid
      className="background-radial-gradient !my-20 mx-0 h-full overflow-hidden pb-3 pt-3 lg:!mx-20 lg:!px-10"
    >
      <MDBRow>
        <div md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="bg-glass my-5">
            <MDBCardBody className="p-2">
              <div className="d-flex mt-2 flex-row">
                <MDBIcon
                  fas
                  icon="terminal fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">
                  {" "}
                  <span style={{ color: "#008000" }}>GDSC</span>{" "}
                  <span style={{ color: "#0000FF" }}>UCU</span>
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Apply now to get your self a chance to join and serve on the
                GDSC UCU Chapter Team
              </h5>
              <form onSubmit={handleFormSubmit} className="align-middle">
                <MDBRow>
                  <MDBCol col="6" className="mr-72 mt-0">
                    <MDBFile
                      label="Upload Image"
                      size="sm"
                      id="formFileSm"
                      className="mb-4"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form2"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
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
                  required
                />
                <MDBTextArea
                  label="Biographical Statement"
                  id="textAreaExample"
                  rows={4}
                  className="mb-3"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <MDBRow>
                  <MDBCol col="3">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="University"
                      id="form1"
                      type="text"
                      value={affiliation}
                      onChange={(e) => setAffiliation(e.target.value)}
                    />
                  </MDBCol>

                  <MDBCol col="3">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Current program"
                      id="form2"
                      type="text"
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                    />
                  </MDBCol>

                  <MDBCol col="3">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Year of study"
                      id="form3"
                      type="text"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <div className="mb-4 text-center">
                  <h5 className="fw-bold mb-2 mt-4 pb-0">Your Skillset</h5>{" "}
                  <MDBCheckbox
                    name="inlineCheck"
                    id="inlineCheckbox1"
                    value="option1"
                    label="Programming"
                    inline
                  />
                  <MDBCheckbox
                    name="inlineCheck"
                    id="inlineCheckbox2"
                    value="option2"
                    label="Organisation"
                    inline
                  />
                  <MDBCheckbox
                    name="inlineCheck"
                    id="inlineCheckbox3"
                    value="option1"
                    label="Leadership"
                    inline
                  />
                  <MDBCheckbox
                    name="inlineCheck"
                    id="inlineCheckbox4"
                    value="option2"
                    label="Planning"
                    inline
                  />
                </div>

                <div className="mb-4 ml-20 text-left">
                  <h5 className="fw-bold mb-2 mt-4 pb-0">
                    Position applied for
                  </h5>{" "}
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    label="Club Member"
                  />
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    label="Club Lead"
                    defaultChecked
                  />
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    label=" Event Coordinator"
                    defaultChecked
                  />
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    label=" Marketing Lead"
                    defaultChecked
                  />
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault5"
                    label="Technical Lead"
                    defaultChecked
                  />
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault6"
                    label="Mentorship Lead"
                    defaultChecked
                  />
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault7"
                    label="Design Lead"
                    defaultChecked
                  />
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault8"
                    label="Outreach Lead"
                    defaultChecked
                  />
                </div>

                <div className="d-flex justify-content-center mb-3">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="I agree to the terms and conditions "
                  />
                </div>

                {/* <MDBBtn className="mb-3 w-36" color="danger" size="lg" type="submit" onSubmit={handleFormSubmit}>
                Apply Now
              </MDBBtn> */}
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<Send />}
                  sx={{
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "red" },
                  }}
                  className="sm"
                >
                  Save
                </Button>
              </form>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBRow>
    </MDBContainer>
  );
};

export default AppForm;

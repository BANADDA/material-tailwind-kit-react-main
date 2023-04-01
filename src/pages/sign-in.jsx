import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

export function SignIn() {
  return (
    <>
    <section className="relative flex h-screen content-center items-center justify-center pt-16 pb-5 ml-0 text-center">
    <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
          <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className=" my-5 mx-auto" style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='px-5 py-3 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="sm"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="sm"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='sm'>
                Login
              </MDBBtn>

              <hr className="my-4" />

              <MDBBtn className="mb-2 w-100" size="sm" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" size="sm" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
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
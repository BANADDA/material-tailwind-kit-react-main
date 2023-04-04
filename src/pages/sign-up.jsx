import React from "react";
import Register from "@/widgets/cards/card";
import { ToastContainer } from "react-toastify";

export function SignUp() {
  return (
    <>
    <ToastContainer/>
      <section className="relative ml-0 flex h-screen content-center items-center justify-center mb-0 lg:pb-5 pt-56 lg:pt-16 text-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex items-center">
            <Register />
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

import { Footer } from "@/widgets/layout";
import React from "react";
import AppForm from "./appForm";

export function Application() {
  return (
    <>
      <section className="relative ml-0 flex h-auto content-center items-center justify-center mb-0 lg:pb-5 pt-32 lg:pt-10 text-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/GDSC.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex justify-center items-center !mt-16">
            <AppForm/>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Application;

import React from "react";
import { useState } from "react";

function Leader({
  src,
  alt,
  name,
  social,
  affliation,
  position,
  skills
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="dark:bg-neutral-700 flex flex-col rounded-lg bg-white shadow-lg md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
          src={src}
          alt={alt}
        />
        <div className="flex flex-col justify-start p-6 pb-0 align-middle">
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
        <span className=" text-base text-black font-semibold">{name}</span> 
          
        </span>
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
              Position: <span className="text-base text-black font-semibold">{position}</span> 
            
          </span>
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
              Affliation: <span className="text-base text-black font-semibold">{affliation}</span> 
            
          </span>
          <span className="text-red-500  font-semibold align-start mb-2 text-lg">
            
              Skills: <span className="text-base text-black font-semibold">{skills}</span> 
            
          </span>
          <span className="mt-3 h-0.5 w-full bg-red-600 lg:w-full"></span>
          <div className="mt-2 flex justify-center align-middle">{social}</div>
        </div>
      </div>
    </div>
  );
}

export default Leader;

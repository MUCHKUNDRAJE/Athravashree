import React from "react";

function ServicesCards() {
  return (
    <div className="h-80 w-64  bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <div className="h-[65%] w-full relative group">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src="https://sites.create-cdn.net/siteimages/60/7/9/607929/21/3/4/21340658/2000x1333.jpg?1737458414"
          alt="Service"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow justify-between">
        <h1 className="inter px-3 py-2 text-center text-lg font-semibold text-gray-800">
          Architect & Planning Consultant
        </h1>
        <button className="bg-[#8B276F] cursor-pointer hover:bg-zinc-200 text-white hover:text-black transition-all duration-300 rounded-b-2xl p-3">
          Get Details
        </button>
      </div>
    </div>
  );
}

export default ServicesCards;

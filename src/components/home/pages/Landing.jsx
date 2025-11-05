import React from 'react'

function Landing_page({logoref  , titleref}) {
  return (
   <div className="h-screen w-full bg-white flex flex-col items-center justify-center bg-[url(https://i.pinimg.com/736x/a9/51/f2/a951f29e0158851d8486c0ab2348fe8d.jpg)]">
        <div className="scale-80 md:scale-100 h-96 w-96 flex flex-col items-center justify-center">
          <img
           
            ref={logoref}
            src="./logo.png"
            className=""
            alt=""
          />
        </div>
        <h1
          ref={titleref}
          className="text-4xl md:text-6xl md:mt-0 -mt-10  staatliches-regular text-[#8B276F] whitespace-nowrap"
        >
          CONSTRUCTION MART
        </h1>
        <h6 className="londrina-solid-light londrina-solid-thin text-xl font-bold inter text-[#8B276F] whitespace-nowrap">
          Lets Do Business Together
        </h6>
      </div>
  )
}

export default Landing_page
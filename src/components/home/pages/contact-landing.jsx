import React from 'react'
import Footer from '../../Footer'

function ContactLanding() {
  return (
    <>
 <div className="h-screen w-full flex items-center justify-center ">
          <div className="h-full w-96 flex items-center justify-center mb-20  gap-10 flex-col ">
            <h1 className=" staatliches-regular text-2xl  bg-[#8B276F]  px-10 py-1 text-white rounded-xl">Contact US</h1>
            <div className="flex items-start justify-center flex-col">
              <h1 className="inter flex gap-1 text-xl hover:text-green-400 transition-all cursor-pointer "> <i class="ri-whatsapp-fill scale-110" ></i> Whatsapp</h1>
              <h1 className="inter flex gap-1 text-xl  hover:text-blue-500 transition-all cursor-pointer  "><i class="ri-facebook-fill"></i>Facebook</h1>
              <h1 className="inter flex gap-1 text-xl  hover:text-blue-900 transition-all cursor-pointer "><i class="ri-linkedin-fill"></i> LinkedIn</h1>
              <h1 className="inter flex text-xl  hover:text-purple-600 transition-all cursor-pointer  "> <i class="ri-phone-fill"></i>+91 9970527627</h1>
              <h1 className="inter flex text-xl  hover:text-purple-600 transition-all cursor-pointer "> <i class="ri-phone-fill"></i>+91 9326116999</h1>

            </div>

          </div>
          <div className="h-full w-[60%]  flex flex-col items-center gap-0 justify-center">
            <div className="flex flex-col items-center justify-center -mt-10  scale-80">
              <div className="h-96 w-96 flex flex-col items-center justify-center">
                <img
                  src="./logo.png"
                  className=""
                  alt=""
                />
              </div>
              <h1
                
                className="text-5xl md:text-6xl staatliches-regular text-[#8B276F] whitespace-nowrap"
              >
                CONSTRUCTION MART
              </h1>
              <h6 className="londrina-solid-light londrina-solid-thin text-xl font-bold inter text-[#8B276F] whitespace-nowrap">
                Lets Do Business Together
              </h6>



            </div>

            <p className="inter text-center text-[#8B276F]">
              Delivering quality materials, reliable service, and innovative solutions for every project.
              From foundation to finishing, we ensure excellence at every step.
              Let’s construct a better tomorrow, together.

            </p>

            <p className="text-zinc-500 inter text-center  w-[90%] text-xs font-bold mt-10  ">
              @2025 Athravashree Infraventures Pvt Ltd REGD. OFFICE: 81 Anmol Nagar
              Wathoda Ring Road, Wathoda
              Nagpur 440034, Maharashtra, India , This Website develop and desgin by Muchkundraje thote

            </p>
          </div>
          <div className="h-full w-96 flex items-center justify-center mb-20  gap-10 flex-col  ">
            <h1 className=" staatliches-regular text-2xl  bg-[#8B276F]  px-10 py-1 text-white rounded-xl">Portfolio</h1>
            <div className="flex items-end justify-center flex-col">
              <h1 className="inter flex gap-1 text-xl hover:text-green-400 transition-all cursor-pointer "> Home</h1>
              <h1 className="inter flex gap-1 text-xl hover:text-green-400 transition-all cursor-pointer "> About</h1>
              <h1 className="inter flex gap-1 text-xl  hover:text-blue-500 transition-all cursor-pointer  ">Projects</h1>
              <h1 className="inter flex gap-1 text-xl  hover:text-blue-900 transition-all cursor-pointer "> Services</h1>
              <h1 className="inter flex text-xl  hover:text-purple-600 transition-all cursor-pointer  "> Contact</h1>


            </div>

          </div>
        </div>

        <Footer/>
    
    </>
  )
}

export default ContactLanding
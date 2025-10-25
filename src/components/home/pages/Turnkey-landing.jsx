import React from 'react'

function TurnkeyLanding({slideRef}) {
  return (
      <div className="min-h-screen w-full flex ">
          <div className=" h-full w-96 md:w-[60%]" >
            <div className="w-full md:h-1/2 pt-10  ">
              <h1 className="gilroy  text-4xl font-bold bg-[#8B276F]  rounded-r text-white px-10 py-2 ">
                Turnkey Construction Solutions
              </h1>

              <p className=" px-4 md:px-30 py-10 w-full inter text-md font-semibold text-zinc-500">
                Complete Construction With Material Solutions
                Our Idea Transforms Your Dream Into Reality

                <span className="text-zinc-900 "> Save up to 25% to
                  50% on professional
                  services ,10 years of guarantee
                  free service,No extra charges, Free site Visit
                </span>


              </p>
            </div>
            <div className='h-96 w-96 block md:hidden px-2 rounded-2xl overflow-hidden' >
<img className="h-full w-full object-cover rounded-2xl " src="https://images.unsplash.com/photo-1590791057283-b4cda358303e?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     
            </div>
            <div className="w-full  md:flex  md:h-1/2 flex justify-end  items-start">
              <div className="h-[30rem]  hidden md:block w-[70%] mt-10 ml-10">
                <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1590791057283-b4cda358303e?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
            </div>
          </div>
          <div className=" h-full w-1/2 hidden md:flex  justify-start  items-center relative" >
            <div ref={slideRef} className="h-[37rem] opacity-100 absolute w-[27rem] bg-white mt-10 ml-10">

            </div>
            <div className="h-[37rem] w-[27rem] bg-amber-400 mt-10 ml-10 ">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
        </div>
  )
}

export default TurnkeyLanding
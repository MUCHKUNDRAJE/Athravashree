import React from 'react'
import { ArrowBigRightDashIcon } from 'lucide-react';

function Page1({logoref, titleref}) {
  return (
   <div  className='inter md:min-h-screen flex  overflow-hidden  md:flex md:flex-row md:pt-20 w-full '>
        <div className=' -mt-20 md:mt-0 font-bold  md:p-20 h-[80vh] flex items-start justify-center flex-col w-full  md:w-1/2 text-[#8B276F] '>
                <h1 className=' gilroy px-10 font-bold text-5xl md:text-8xl   text-[#8B276F] ' >
              
              About us      
             </h1>
             <p className='inter px-10 text-sm md:text-lg font-medium text-gray-500  '>Atharvashree Infraventures Pvt. Ltd. is a Nagpur based company working towards excellence in the Construction space, and believe in pursuing business through innovation and technology. Our team comes with several years of industry experience,and comprise of a highly motivated set of specialists & industry experts.Our goal is to be a leader in the industry by providing enhanced products, services, relationship and profitability.</p>
                
       
                 <section className='flex items-center md:justify-start justify-center md:px-10  w-full'>
                  
                  <button className='md:px-10 px-4   py-2 whitespace-nowrap flex gap-3  mt-4 bg-[#8B276F] text-white inter font-semibold rounded-2xl'>
             Know more about us on LinkedIN <ArrowBigRightDashIcon/>
        </button>
                  
                  </section>               
        </div>
           <div className='h-[50vh] hidden md:flex mt-30 md:mt-0 md:mb-20 md:h-[80vh] w-full  md:w-1/2 bg-[url(https://i.pinimg.com/736x/a9/51/f2/a951f29e0158851d8486c0ab2348fe8d.jpg)] relative   items-start justify-center '>
                     <div className="h-[35vh] md:h-auto bg-white w-90 flex flex-col items-center justify-center bg-[url(https://i.pinimg.com/736x/a9/51/f2/a951f29e0158851d8486c0ab2348fe8d.jpg)]">
        <div className="h-96 w-96 flex flex-col items-center justify-center">
          <img
           
            ref={logoref}
            src="./logo.png"
            className=""
            alt=""
          />
        </div>
        <h1
          ref={titleref}
          className="text-5xl md:text-6xl staatliches-regular text-[#8B276F] whitespace-nowrap"
        >
          CONSTRUCTION MART
        </h1>
     
      </div> 
        </div>

   
  </div>
  )
}

export default Page1
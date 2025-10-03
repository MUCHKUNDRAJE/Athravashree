import React from 'react'
import Footer from '../../Footer'

function Page1() {
   return (
      <>
         <div className=' min-h-screen w-full p-2 pt-20 md:px-10 mb-4 '>
            <h1 className="staatliches-regular bg-[#8B276F] text-6xl  text-white p-2 md:px-10 rounded-t-2xl">Projects</h1>
            <div className='min-h-screen w-full bg-slate-200  flex flex-wrap items-start p-2 md:p-10 gap-10 justify-center   rounded-b-2xl'>
               <div className='h-96 w-96 md:w-[45%] p-6  bg-white rounded-4xl '>
                  <div className='h-70 rounded-4xl w-full bg-slate-200 overflow-hidden '>
                               <img className='h-full w-full'  src="https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx" alt="" />
                  </div>
                  <div className='flex  items-center justify-between p-3'>
                     <div className=''>

                        <h1 className='inter  font-medium'> Manish Nagar Property</h1>
                        <p className='inter text-sm'>
                           Contracted of 2 Floor House with Finishing
                        </p>


                     </div>

                     <button className=' inter font-semibold text-sm  p-2 bg-[#8B276F] text-white rounded' >
                        Vist the site
                     </button>

                  </div>
               </div>



               <div className='h-96 w-[45%] p-6  bg-white rounded-4xl '>
                       <div className='h-70 rounded-4xl w-full bg-slate-200 overflow-hidden '>
                               <img className='h-full w-full'  src="https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx" alt="" />
                  </div>
                  <div className='flex  items-center justify-between p-3'>
                     <div className=''>

                        <h1 className='inter  font-medium'> Manish Nagar Property</h1>
                        <p className='inter text-sm'>
                           Contracted of 2 Floor House with Finishing
                        </p>


                     </div>

                     <button className=' inter font-semibold text-sm  p-2 bg-[#8B276F] text-white rounded' >
                        Vist the site
                     </button>

                  </div>
               </div>



               <div className='h-96 w-[45%] p-6  bg-white rounded-4xl '>
                      <div className='h-70 rounded-4xl w-full bg-slate-200 overflow-hidden '>
                               <img className='h-full w-full'  src="https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx" alt="" />
                  </div>
                  <div className='flex  items-center justify-between p-3'>
                     <div className=''>

                        <h1 className='inter  font-medium'> Manish Nagar Property</h1>
                        <p className='inter text-sm'>
                           Contracted of 2 Floor House with Finishing
                        </p>


                     </div>

                     <button className=' inter font-semibold text-sm  p-2 bg-[#8B276F] text-white rounded' >
                        Vist the site
                     </button>

                  </div>
               </div>


            </div>



         </div>
         <Footer />


      </>)
}

export default Page1
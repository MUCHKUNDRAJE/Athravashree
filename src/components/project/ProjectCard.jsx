import React from 'react'

function ProjectCard() {
  return (
      <div className='h-fit w-96 md:w-[45%] p-6  bg-white rounded-4xl '>
                  <div className='h-70 rounded-4xl w-full bg-slate-200 overflow-hidden '>
                               <img className='h-full w-full'  src="https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx" alt="" />
                  </div>
                  <div className='flex  flex-col md:flex-row items-center justify-between p-3'>
                     <div className=''>

                        <h1 className='inter text-xl  font-medium'> Manish Nagar Property</h1>
                        <p className='inter text-sm'>
                           Contracted of 2 Floor House with Finishing
                        </p>


                     </div>

                     <button className=' inter md:mt-0 w-50 md:w-auto mt-5 font-semibold text-sm  p-2 bg-[#8B276F] text-white rounded' >
                        Vist the site
                     </button>

                  </div>
               </div>
  )
}

export default ProjectCard
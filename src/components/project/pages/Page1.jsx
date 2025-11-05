import React from 'react'
import Footer from '../../Footer'
import ProjectCard from '../ProjectCard'

function Page1() {
   return (
      <>
         <div className=' min-h-screen w-full p-2 pt-20 md:px-10 mb-4 '>
            <h1 className="staatliches-regular bg-[#8B276F] text-6xl  text-white p-2 md:px-10 rounded-t-2xl">Projects</h1>
            <div className='min-h-screen w-full bg-slate-200  flex flex-wrap items-start p-2 md:p-10 gap-10 justify-center   rounded-b-2xl'>
              <ProjectCard/>
                <ProjectCard/> 
                 <ProjectCard/>



             


            </div>



         </div>
         <Footer />


      </>)
}

export default Page1
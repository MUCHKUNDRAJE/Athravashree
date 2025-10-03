import { motion } from 'framer-motion'
import React from 'react'


function Page2() {
   

  return (
    <div className='h-screen w-full flex items-center justify-center '>
        <div className='h-screen w-1/2  flex items-center justify-center' >
             <div className='h-[70%] rounded-2xl w-[90%] bg-amber-300 overflow-hidden relative'>
                      <img className='h-full w-full object-cover object-top' src="/client.jpg" alt="" />
                  <motion.div initial={{opacity:0}} whileInView={{opacity:1}}  transition={{delay:0.3}}  viewport={{amount:0.9}}  className='h-20 rounded-2xl p-3 shadow-2xl w-96 bg-white absolute bottom-2 left-2' >
                     <div    className='inter px-2 text-xl font-semibold text-[#8B276F]'>
                           Mr. Vinay Rajgire
                     </div>
                     <div className='h-full   w-full flex items-start  justify-start gap-2 '>
                     <div className='h-8 w-1 rounded-2xl  bg-[#8B276F]'>
                         
                     </div >
                     <h1 className='font-medium mt-1'>
                        Founder of Athravashree Infraventures Pvt Ltd 
                     </h1>
                     </div>
                  </motion.div>
             </div>
        </div>
         <div className='h-screen w-1/2 flex items-center justify-center ' >
                     
                    <div className='w-[70%] flex flex-col items-center justify-center'>
                           <h1 className='gilroy font-bold text-3xl mb-4 bg-[#8B276F] text-white p-2 rounded  '>Our Founders Vision</h1>
                     <i className='inter  '>
                        "Founded by  <b>Mr. Vinay Rajgire</b> our journey began with a simple vision – We ensure <b> customer satisfaction </b> and value creation through innovative design, quality materials, timely delivery, and exceptional workmanship. . With years of expertise in  <b>Construction Field</b>, He believed in creating a platform that not only delivers good services and product of construction but also builds lasting relationships based on trust and innovation. Under his leadership, we have grown into a team that thrives on excellence and commitment. As He always says, <br /> ‘ We don’t just build structures, we build trust that lasts a lifetime ’. Today, we continue to prioritize quality workmanship, top-tier customer service, and unwavering professionalism, honesty, and fairness in all interactions."
                     </i>
                    </div>
                        
        </div>
    </div>
  )
}

export default Page2
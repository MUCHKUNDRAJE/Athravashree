import React from 'react'
import {motion} from 'framer-motion'

function Visionpage() {
  return (
     <div className="min-h-screen py-40 w-full gap-10 flex md:flex-row  flex-col  ">
       <h1 className="staatliches-regular block md:hidden text-5xl whitespace-nowrap md:text-7xl mb-10 bg-[#8B276F] text-white rounded px-10 py-2">Vision and  Mission</h1>
       
        <div className="h-full md:w-1/2 flex items-center justify-center">
          <motion.div
            initial={{ borderRadius: "1rem", scale: 1.3 }} // Start as circle (rounded-full)
            whileInView={{ borderRadius: "50rem", scale: 1.2 }} // Animate to rounded-2xl on scroll
            viewport={{ once: false, amount: 0.2 }} // Trigger when 50% of div is visible
            transition={{
              type: "spring",
              stiffness: 20,
              damping: 20,
              duration: 2,
            }}
            className=" h-50 w-50 md:h-96 md:w-96 bg-red-100 overflow-hidden"
          >
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=455&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </motion.div>

        </div>

        <div className=" h-full md:w-1/2 flex items-center justify-center  flex-col  ">
          <h1 className="staatliches-regular hidden md:block text-7xl mb-10 bg-[#8B276F] text-white rounded px-10 py-2">Vision and  Mission</h1>
          <h1 className="staatliches-regular text-2xl text-[#8B276F] ">Vision</h1>
          <p className="w-[80%] inter text-center ">We aim for total customer satisfaction and
            enhanced shareholder value through innovative
            design, high-quality materials, timely project
            completion, and exceptional workmanship</p>
          <h1 className="staatliches-regular text-2xl mt-10 text-[#8B276F] ">Mission</h1>
          <p className="w-[80%] inter text-center ">
            We prioritize quality workmanship, top-tier
            customer service, and unwavering professionalism,
            honesty, and fairness in all interactions. Our growth
            strategy includes delivering valuable products and
            services to existing markets while expanding into new
            areas. Additionally, we aim to contribute to India's
            economy by creating job opportunities in the business
            services sector. Our goal is to extend our services to
            both urban and rural areas across Maharashtra for
            through comprehensive infrastructure development
          </p>
        </div>
      </div>
  )
}

export default Visionpage
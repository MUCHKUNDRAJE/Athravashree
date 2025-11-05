import React from 'react'
import {motion} from "framer-motion"

function About_landing() {
  return (
  <div className="gilroy w-full relative text-center flex items-center justify-center   flex-col text-4xl text-[#8B276F] font-bold md:h-screen  md:w-full p-2  md:p-19">

        {/* Background cards animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0, ease: "backInOut" }}
          viewport={{ once: true }}
          className="h-34 hidden md:block w-60 bg-red-50 absolute top-30 left-25 rounded-2xl -rotate-4 overflow-hidden"
        >
          <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "backInOut" }}
          viewport={{ once: true }}
          className="h-34 hidden md:block w-60 bg-red-50 absolute top-30 right-25 rounded-2xl rotate-4 overflow-hidden"
        >
          <img className="h-full w-full object-cover" src="image.png" alt="" />


        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "backInOut" }}
          viewport={{ once: true }}
          className="h-34  hidden md:block w-60 bg-red-50 overflow-hidden absolute top-125 left-30 rounded-2xl rotate-4"
        >
          <img src="./image1.png" className="h-full w-full object-cover scale-110" alt="" />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "backInOut" }}
          viewport={{ once: true }}
          className="h-34  hidden md:block w-60 bg-red-50 absolute top-125 right-30 rounded-2xl -rotate-4 overflow-hidden"
        >
          <img className="h-full  w-full object-cover" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        </motion.div>

        {/* Logo */}
        <div className="h-20 w-20   z-30 mb-10 rounded-xl">
          <img src="./logo.png" alt="" />
        </div>

        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl'
        >
          {["About Athravashree Infraventures Pvt Ltd"].map((val, i) => (
            <span className="about-text inline-block" key={i}>
              {val}
            </span>
          ))}
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="w-full flex items-center justify-center"
        >
          <p className="md:text-xl text-lg inter font-medium w-[100%]  md:w-[60%] mt-2">
            Atharvashree Infraventures Pvt Ltd is a prominent infrastructure
            company in Maharashtra known for luxury amenities and innovative
            designs. They emphasize timely delivery, transparent pricing, and
            professionalism in their residential, commercial, and township
            projects in Nagpur City, backed by{" "}
            <span className="font-bold gilroy">8-9 years of experience</span>.
            Their vision focuses on expanding in the construction industry by
            building trust with clients and stakeholders.
          </p>
        </motion.div>
      </div>
  )
}

export default About_landing
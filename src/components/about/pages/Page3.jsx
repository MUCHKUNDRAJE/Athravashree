import { Award, CheckCircle, Clock, DollarSign, Handshake, Layers, Package, Shield, Star, TrendingUpDown } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from "framer-motion";

function Page3() {
  const [Speciality] = useState([
    {
      "heading": "Excellence",
      "para": "We focus on delivering the highest quality work that meets and exceeds client expectations."
    },
    {
      "heading": "Punctuality",
      "para": "Every project is completed on time, ensuring zero delays and smooth progress."
    },
    {
      "heading": "Reliability",
      "para": "We act as dedicated caretakers of your projects, handling every detail with care."
    },
    {
      "heading": "Planning",
      "para": "Our expert planning includes 3D visualizations to bring your ideas to life accurately."
    },
    {
      "heading": "Value",
      "para": "We provide top-quality construction while keeping costs affordable for our clients."
    },
    {
      "heading": "Assurance",
      "para": "All our work comes with a 10-year construction guarantee for your peace of mind."
    },
    {
      "heading": "Convenience",
      "para": "Complete solutions for your dream home are provided under one roof for ease."
    },
    {
      "heading": "Savings",
      "para": "Our professional services help you save between 25% to 50% without compromise."
    },
    {
      "heading": "Integrity",
      "para": "We respect our customers’ interests and always fulfill the commitments we make."
    },
    {
      "heading": "Commitment",
      "para": "We ensure our clients receive the best in every aspect of their project."
    }
  ]);

  const [icon] = useState([
    <Award />,
    <Clock />,
    <Shield />,
    <Layers />,
    <DollarSign />,
    <CheckCircle />,
    <Package />,
    <TrendingUpDown />,
    <Handshake />,
    <Star />
  ]);

  // 🔑 Variants for parent (controls stagger)
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // delay between children
      }
    }
  };

  // 🔑 Variants for each card
  const cardVariants = {
    hidden: { opacity: 0, },
    show: { opacity: 1,  transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    <div className='min-h-screen w-full px-10 py-20  md:p-20'>
      <h1 className='text-center mb-15 gilroy font-bold text-4xl text-[#8B276F]'>
        Our Specialities
      </h1>

      {/* Parent motion.div with variants */}
      <motion.div
        className='h-full hidden w-full md:flex flex-wrap items-center justify-center gap-7'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {Speciality.map((val, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className='group h-60 w-96 rounded-2xl bg-white/30 hover:bg-[#8B276F] backdrop-blur-3xl border-zinc-300 border-[2px] p-5 flex flex-col transition-all duration-300 items-start'
          >
            <div className='h-10 w-10 bg-[#8B276F] flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#8B276F] group-hover:scale-110 transition-transform rounded-full'>
              {icon[i]}
            </div>
            <h1 className='font-bold inter mt-5 text-3xl group-hover:text-white'>
              {val.heading}
            </h1>
            <p className='inter mt-3 text-start group-hover:text-white'>
              {val.para}
            </p>
          </motion.div>
        ))}
      </motion.div>


         <div
        className='h-full md:hidden w-full flex flex-wrap items-center justify-center gap-7'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {Speciality.map((val, i) => (
          <div
            key={i}
            variants={cardVariants}
            className='group h-60 w-96 rounded-2xl bg-white/30 hover:bg-[#8B276F] backdrop-blur-3xl border-zinc-300 border-[2px] p-5 flex flex-col transition-all duration-300 items-start'
          >
            <div className='h-10 w-10 bg-[#8B276F] flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#8B276F] group-hover:scale-110 transition-transform rounded-full'>
              {icon[i]}
            </div>
            <h1 className='font-bold inter mt-5 text-3xl group-hover:text-white'>
              {val.heading}
            </h1>
            <p className='inter mt-3 text-start group-hover:text-white'>
              {val.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;

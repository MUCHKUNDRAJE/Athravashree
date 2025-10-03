
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ArrowBigRightDashIcon } from 'lucide-react';
import Page1 from '../components/about/pages/Page1';
import Footer from '../components/Footer';
import Page2 from '../components/about/pages/Page2';
import Page3 from '../components/about/pages/Page3';
import ContactLanding from '../components/home/pages/contact-landing';
import Page4 from '../components/about/pages/Page4';

function About() {

      const logoref = useRef();
  const titleref = useRef();


   useEffect(()=>{
       gsap.set(logoref.current, { transformOrigin: "bottom center" });
   
       // Intro + floating
       const introTl = gsap.timeline();
       introTl.fromTo(
         logoref.current,
         { scale: 0, rotationY: 360 },
         { scale: 1, rotationY: 0, duration: 1.5, ease: "back.inOut" }
       )
         .to(logoref.current, {
           y: -20,
           duration: 2,
           ease: "power1.inOut",
           repeat: -1,
           yoyo: true,
         });
       

   })


  return ( 
    <main >
   <Page1 logoref={logoref} titleref={titleref}/>
   <Page2/>
   <Page3/>
   <Page4/>
   <Footer/>
    </main>
  )
}

export default About
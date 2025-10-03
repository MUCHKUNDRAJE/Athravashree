import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import Autoplay1 from "../components/home/swiper";
import ServicesCards from "../components/home/services-Cards";
import Marquee from "react-fast-marquee";
import Testimonial from "../components/home/testamonial";
import { FacebookIcon, InstagramIcon, Phone } from "lucide-react";
import Nav from "../components/Nav";
import Landing_page from "../components/home/pages/Landing";
import About_landing from "../components/home/pages/About-landing";
import MemberLanding from "../components/home/pages/member-landing";
import Visionpage from "../components/home/pages/Vision-landing";
import TurnkeyLanding from "../components/home/pages/Turnkey-landing";
import ContactLanding from "../components/home/pages/contact-landing";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const logoref = useRef();
  const titleref = useRef();
  const slideRef = useRef();

  useEffect(() => {
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

    // Scroll animation


    gsap.fromTo(
      slideRef.current,
      { y: 0 }, // start position
      {
        y: 550,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: slideRef.current,
          start: "top 70%", // when top of slide hits 80% of viewport
          end: "bottom 40%", // until bottom hits 50%
          scrub: true, // smooth scroll-linked animation
          // markers: true, // 👈 for debugging (remove later)
        },
      }
    );





  }, []);

  // About text animation



  const up = () => {
    const clickTl = gsap.timeline();

    clickTl

      .to(logoref.current, {
        scale: 1.2,
        rotateY: 0,
        duration: 0.7,
        ease: "circ.inOut",
      })
      .to(logoref.current, {
        scale: 1,
        rotateY: 360,
        duration: 1,
        ease: "circ.inOut",
      });
  };

  setInterval(() => {
    up()
  }, 6000);

  return (
    <>
      {/* Navbar */}
    



      {/* Hero */}
      <main className="w-full min-h-auto">


        <Landing_page logoref={logoref} titleref={titleref} />

        <About_landing />


        <Visionpage />

        <MemberLanding />


       <TurnkeyLanding slideRef={slideRef} />

        <div className="min-h-[100vh]  w-full  flex  items-center justify-center  flex-col   py-40  ">

          <h1 className="staatliches-regular text-5xl px-6 text-center z-40 bg-[#8B276F] text-white rounded  " >Services and  Product</h1>
          <div className="w-[80%]  rounded-2xl overflow-hidden p-2 flex flex-wrap gap-10 items-center justify-center   z-50 ">
            <div className="h-10 w-full flex ml-10 ">
              <div className="inter h-full w-40 text-center text-xl font-bold   text-zinc-600 border-b-2">
                Services
              </div>
              <div className=" inter h-full w-40 text-center text-xl font-bold   text-zinc-600 ">
                Product
              </div>
            </div>
            <ServicesCards />
            <ServicesCards />
            <ServicesCards />
            <ServicesCards />
            <ServicesCards />
            <ServicesCards />
            <ServicesCards />
            <ServicesCards />

          </div>
          <div>
            <h1 className="inter px-3 py-3 bg-[#8B276F] text-white mt-7 rounded-2xl">See more Services </h1>
          </div>
        </div>

        <div className="h-[120vh] w-full flex items-center justify-start -mt-20  flex-col  gap-10  ">
          <h1 className="staatliches-regular text-7xl px-10 text-center z-50  bg-[#8B276F] text-white rounded " >Projects</h1>
          <div className="w-[80%] h-[70%] rounded-2xl overflow-hidden   z-50">
            <Autoplay1 />

          </div>
        </div>



        <div className="min-h-[100vh] w-full  -mt-12 py-2   flex-col   gap-10  ">

          <div className="h-96 w-full ">
            <div className="w-full h-24   flex items-center justify-center">
              <h1 className="staatliches-regular bg-[#8B276F]  mb-10 text-4xl px-6 py-1 text-center z-40  rounded text-white"> Testimonials  </h1>
            </div>
            <Marquee pauseOnHover speed={50}  >
              <Testimonial
                name="Rohan Sharma"
                role="CEO, BuildTech Pvt Ltd"
                feedback="Working with Athravashree was a fantastic experience! They delivered on time and exceeded expectations."
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
              <Testimonial
                name="Rohan Sharma"
                role="CEO, BuildTech Pvt Ltd"
                feedback="Working with Athravashree was a fantastic experience! They delivered on time and exceeded expectations."
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
              <Testimonial
                name="Rohan Sharma"
                role="CEO, BuildTech Pvt Ltd"
                feedback="Working with Athravashree was a fantastic experience! They delivered on time and exceeded expectations."
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
              <Testimonial
                name="Rohan Sharma"
                role="CEO, BuildTech Pvt Ltd"
                feedback="Working with Athravashree was a fantastic experience! They delivered on time and exceeded expectations."
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />


            </Marquee>
          </div>

          <h1 className="staatliches-regular bg-[#8B276F]  mb-10 text-4xl px-6 py-1 text-center z-40  text-white "> Project Quotation  </h1>

          <div className="h-96 w-[100%]  flex items-center justify-center opacity-90">

            <div className="h-full w-[90%] rounded-2xl flex overflow-hidden  " >
              <div className="h-full relative bg-[url(https://images.timesproperty.com/blog/1737/Picture1.jpg)] bg- w-[25%] flex items-center gap-2 flex-col justify-center">
                <div className="h-full w-full bg-neutral-700 opacity-30 z-10 absolute top-0 left-0">

                </div>
                <div className="bg-blue-300 h-56 w-56 rounded-2xl  z-20 overflow-hidden border-10 border-white">
                  <img className="h-full w-full object-cover " src="https://images.timesproperty.com/blog/1737/Picture1.jpg" alt="" />
                </div>
                <h1 className="gilroy font-bold text-2xl text-white p-2  z-20  px-10 rounded-2xl bg-amber-500">Basic</h1>
                <h1 className="inter font-semibold text-white  z-20 ">1650/sq.ft</h1>
              </div>
              <div className="h-full relative bg-[url(https://qarpentri.com/cdn/shop/articles/budget-interior-design-ideas_2000x.jpg?v=1705672560)] w-[25%] flex items-center gap-2 flex-col justify-center">
                <div className="h-full w-full bg-neutral-700 opacity-30 z-10 absolute top-0 left-0">

                </div>
                <div className="bg-blue-300  z-20  h-56 w-56 rounded-2xl overflow-hidden border-10 border-white">
                  <img className="h-full w-full object-cover" src="https://qarpentri.com/cdn/shop/articles/budget-interior-design-ideas_2000x.jpg?v=1705672560" alt="" />
                </div>
                <h1 className="gilroy font-bold  z-20  text-2xl text-white p-2  px-10 rounded-2xl bg-sky-600">Economic</h1>
                <h1 className="inter text-white  z-20  font-semibold ">1800/sq.ft</h1>
              </div>
              <div className="h-full bg-[url(https://www.designdekko.com/uploads/blog/1712647897-luxurybedroominteiordesign.jpg)] relative w-[25%] flex items-center gap-2 flex-col justify-center">
                <div className="h-full w-full bg-neutral-700 opacity-40 z-10 absolute top-0 left-0">

                </div>
                <div className="bg-blue-300 h-56 w-56 rounded-2xl  z-20  overflow-hidden border-10 border-white ">
                  <img className="h-full w-full object-cover" src="https://www.designdekko.com/uploads/blog/1712647897-luxurybedroominteiordesign.jpg" alt="" />
                </div>
                <h1 className="gilroy font-bold text-2xl text-white  z-20  p-2  px-10 rounded-2xl bg-yellow-500">Premium</h1>
                <h1 className="inter text-white font-semibold  z-20  ">2200/sq.ft</h1>
              </div>
              <div className="h-full relative bg-[url(https://chiedesign.in/wp-content/uploads/2022/09/Luxury-Interiors-Living-Room-1080x675.jpg)] w-[25%] flex items-center gap-2 flex-col justify-center">
                <div className="h-full w-full bg-neutral-700 opacity-30 z-10 absolute top-0 left-0">

                </div>
                <div className="bg-blue-300 h-56 w-56 rounded-2xl  z-20  overflow-hidden border-10 border-white">
                  <img className="h-full w-full object-cover" src="https://chiedesign.in/wp-content/uploads/2022/09/Luxury-Interiors-Living-Room-1080x675.jpg" alt="" />
                </div>
                <h1 className="gilroy font-bold text-2xl text-white  z-20  p-2  px-10 rounded-2xl bg-green-600">Advance</h1>
                <h1 className="inter text-white font-semibold  z-20  ">2800/sq.ft</h1>
              </div>
            </div>

          </div>

        </div>

        <div className="min-h-screen w-full flex items-center relative justify-center mt-20 ">
          <div className="h-[70vh] w-[90vh] overflow-hidden rounded-4xl relative  bg-red-400">
            <img className="h-full w-full object-cover overflow-hidden" src="https://uploads-ssl.webflow.com/5dd58b148c402e5126209d07/5e44e26a598c278f565bfe0f_Consultancy.jpg" alt="" />
            <div className="bg-black h-full w-full absolute opacity-30 top-0 "></div>
          </div>
          <div className="bg-black h-80 w-80 rounded-4xl z-20  absolute  top-50 overflow-hidden ">
            <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/627cdcca8bc0d22df9b2672f/64afb7b9abb62437f37a3d09_How%20to%20Start%20a%20Recruitment%20Consultancy.webp" alt="" />
          </div>
          <div className="bg-white h-80 w-80 scale-105 z-10   rounded-4xl  absolute  top-50 overflow-hidden ">
          </div>
          <div className="h-[80vh] w-[90vh] ">
            <h1 className="staatliches-regular bg-[#8B276F]  rounded-l-2xl  mb-10 text-4xl px-6 py-1 text-right z-40  text-white "> Planning & Consultation</h1>
            <p className=" w-full text-lg font-normal flex items-end justify-end  ">
              <div className=" inter w-96 font-semibold text-zinc-600 ">
                Our agency provides expert Legal Consultancy, offering clients reliable <span className="bg-[#8B276F] text-white px-4 py-[0.9px] rounded-lg  font-bold">guidance</span>  and   <span className="bg-[#8B276F] text-white px-4 py-[0.9px] rounded-lg  font-bold">strategic</span>  solutions tailored to their needs. With a strong focus on planning and consultation, we ensure every step is handled with professionalism and transparency. From understanding your requirements to designing the right approach, our process emphasizes clarity, efficiency, and trust. Through this structured consultation, we aim to simplify complexities, safeguard your interests, and deliver outcomes that truly add value.

              </div>


            </p>

          </div>
        </div>

     {/* <div className="h-96 opacity-90 w-full  bg-[url(https://i.pinimg.com/736x/a9/51/f2/a951f29e0158851d8486c0ab2348fe8d.jpg)] ">
         <div className="h-full bg-red-300 flex items-center justify-center w-[40%]">
               <img src="/logo.png" alt="" />

         </div>
     </div> */}

     <Footer/>
      </main>


    </>
  );
}

export default Home;

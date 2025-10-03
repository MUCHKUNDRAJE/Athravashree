import React from 'react'
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [scrolled, setScrolled] = useState(true);

    useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY  <= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className={`staatliches-regular fixed   top-0  px-9 py-4 flex items-center justify-between w-full z-[99] transition-all  ${  scrolled ?"bg-transparent shadow-none  " : "bg-white shadow-2xl" }`}>
        <div className="text-[#8B276F] font-bold text-xl">Athravashree</div>
        <div className="hidden text-[15px] inter md:flex text-[#2C3C78] font-semibold gap-10">
          <Link to={'/'}>
          <h1>Home</h1>
          </Link>
            <Link to={'/about'}>
          <h1>About</h1>
        
          </Link>
          <Link to={'/project'}>
          <h1>Project</h1>
          </Link>
          <Link to={"/services"}>
          <h1>Services</h1>
        
          </Link>

          <Link to={"/contact"}>
          <h1>Contact</h1>
          </Link>
        </div>
      </div>
  )
}

export default Nav
// App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";
import Project from "./routes/Project";
import Services from "./routes/Services";
import ContactLanding from "./components/home/pages/contact-landing";


function App() {
  return (
    <div>
       <Nav/>

       <div className="h-13 w-13 border-[0.5px] border-[#8B276F] flex hover:scale-85  transition-all cursor-pointer items-center justify-center z-[99] fixed bottom-7 rounded-full  right-3 bg-slate-100">
              <img className="scale-80" src="/Chartbotlogo.png " alt="" />
       </div>

      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/project" element={<Project />} />
         <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactLanding />} />
       
      </Routes>
    </div>
  );
}

export default App;

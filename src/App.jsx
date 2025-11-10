import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";
import Project from "./routes/Project";
import Services from "./routes/Services";
import ContactLanding from "./components/home/pages/contact-landing";
import ArthravBot from "./components/Atharavabot";

function App() {
  const [openBot, setOpenBot] = useState(false);

  return (
    <div className="relative">
      <Nav />

      {/* Chatbot floating button */}
      <div
        onClick={() => setOpenBot(true)}
        className="h-14 w-14 border-[0.5px] border-[#8B276F] flex hover:scale-90 transition-all cursor-pointer items-center justify-center z-[99] fixed bottom-7 right-3 rounded-full bg-slate-100 shadow-lg"
      >
        <img className="scale-80" src="/Chartbotlogo.png" alt="Chatbot" />
      </div>

      {/* Chatbot Slider (Bottom Sheet) */}

        <div
          className={`fixed bottom-0 left-0 w-full h-[90%] bg-white  shadow-2x  border-gray-300 z-[100]  transition-all duration-300 ${
            openBot ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setOpenBot(false)}
            className="absolute top-8 right-10 scale-130 text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>

          {/* Chatbot content */}
          <div className="p-5 flex flex-col h-full">
                    <ArthravBot/>
          </div>
        </div>
          
      {/* Routes */}
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

// Footer.jsx
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2b3445]   overflow-hidden  text-gray-300 py-10">
      <div className="container  mx-20  px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="text-center   md:text-left">
      
          <h1 className="staatliches-regular text-7xl font-bold text-white flex items-center justify-center md:justify-start">
           Athravashree
          </h1>
            <h1 className="staatliches-regular text-2xl font-bold text-white flex items-center justify-center md:justify-start">
           CONSTRUCTION MART
          </h1>
          <p className="mt-4 text-sm leading-6">
            Empowering students worldwide with smart learning solutions that
            transform education.
          </p>
          {/* <div className="flex justify-center md:justify-start mt-6 space-x-3">
            <a
              href="#"
              className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            >
              <Linkedin size={16} />
            </a>
          </div> */}
        </div>

        {/* Quick Links */}
        <div className="ml-30" >
          <h2 className="font-bold text-white mb-3 border-b-2 border-gradient-to-r from-pink-500 to-purple-500 inline-block">
            Quick Links
          </h2>
          <ul className="space-y-2 mt-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Features */}
        <div >
          <h2 className="font-bold text-white  mb-3 border-b-2 border-gradient-to-r from-pink-500 to-purple-500 inline-block">
            Features
          </h2>
          <ul className="space-y-2 mt-2 text-sm">
            <li>Personalized Learning</li>
            <li>Goal Achievement</li>
            <li>Study Load Management</li>
            <li>Gamification</li>
            <li>Collaborative Learning</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="-ml-30">
          <h2 className="font-bold text-white mb-3 border-b-2 border-gradient-to-r from-pink-500 to-purple-500 inline-block">
            Contact Us
          </h2>
          <p className="flex items-center mt-2 text-sm">
            <Mail className="text-red-500 mr-2" size={18} /> support@vectorlab.in
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-5 text-center text-sm">
      <p>  @2025 Athravashree Infraventures Pvt Ltd  Anmol Nagar
              Wathoda Ring Road, Wathoda
              Nagpur 440034, Maharashtra, India <br /> This Website is Develop and Desgin by <a href="https://github.com/MUCHKUNDRAJE" className="hover:underline">Muchkundraje thote</a></p>
        <div className="flex justify-center mt-2 space-x-5">

        </div>
      </div>
    </footer>
  );
}

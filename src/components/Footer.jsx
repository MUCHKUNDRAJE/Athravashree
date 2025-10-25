// Footer.jsx
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2b3445] text-gray-300 py-10 overflow-hidden">
      {/* Main Grid */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:mx-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="text-center md:text-left  ">
          <h1 className="staatliches-regular text-4xl sm:text-5xl md:text-7xl font-bold text-white flex items-center justify-center md:justify-start">
            Athravashree
          </h1>
          <h1 className="staatliches-regular text-xl sm:text-2xl font-bold text-white flex items-center justify-center md:justify-start">
            CONSTRUCTION MART
          </h1>
          <p className="mt-4 text-sm leading-6 max-w-xs sm:max-w-sm mx-auto md:mx-0">
            Empowering students worldwide with smart learning solutions that
            transform education.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left md:ml-60">
          <h2 className="font-bold text-white mb-3 border-b-2 border-gradient-to-r from-pink-500 to-purple-500 inline-block">
            Quick Links
          </h2>
          <ul className="space-y-2 mt-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Project</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Features */}
        <div className="text-center md:text-left md:ml-30 ">
          <h2 className="font-bold text-white mb-3 border-b-2 border-gradient-to-r from-pink-500 to-purple-500 inline-block">
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
        <div className="text-center md:text-left">
          <h2 className="font-bold text-white mb-3 border-b-2 border-gradient-to-r from-pink-500 to-purple-500 inline-block">
            Contact Us
          </h2>
          <p className="flex items-center justify-center md:justify-start mt-2 text-sm">
            <Mail className="text-red-500 mr-2" size={18} /> support@vectorlab.in
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-5 text-center text-xs sm:text-sm px-4">
        <p>
          © 2025 Athravashree Infraventures Pvt Ltd — Anmol Nagar, Wathoda Ring
          Road, Nagpur 440034, Maharashtra, India.
          <br />
          This website is developed and designed by{" "}
          <a
            href="https://github.com/MUCHKUNDRAJE"
            className="hover:underline text-white font-semibold"
          >
            Muchkundraje Thote
          </a>
        </p>
      </div>
    </footer>
  );
}

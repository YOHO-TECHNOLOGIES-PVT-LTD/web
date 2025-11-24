import { Link } from "react-router-dom";
import logo from "../assets/kIAQ_.png";

export default function Footer() {
  return (
    <footer className="bg-[#fff2eb] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP ROW: Logo + Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <img
            src={logo}
            alt="KIAQ"
            className="h-10 sm:h-12 object-contain opacity-90"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-6 sm:gap-8 text-[#0b3b3d] text-xl sm:text-2xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex justify-center sm:justify-end mt-4">
          <p className="text-[#0b3b3d] text-xs sm:text-sm tracking-wide">
            © 2025 KIAQ, All Rights Reserved.
          </p>
        </div>

        {/* BOTTOM LINKS */}
        <div className="
          flex 
          flex-wrap 
          justify-center sm:justify-end 
          gap-3 sm:gap-4 
          text-xs sm:text-sm 
          text-gray-600 mt-4
        ">
          <Link to="/privacy" className="hover:text-[#0b3b3d]">Privacy Policy</Link>
          <span>✦</span>
          <Link to="/terms" className="hover:text-[#0b3b3d]">Terms</Link>
          <span>✦</span>
          <Link to="/cookies" className="hover:text-[#0b3b3d]">Cookie Preferences</Link>
          <span>✦</span>
          <Link to="/code-of-conduct" className="hover:text-[#0b3b3d]">Code of Conduct</Link>
        </div>

      </div>
    </footer>
  );
}

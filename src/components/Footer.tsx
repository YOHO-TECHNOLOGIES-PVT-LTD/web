import { Link } from "react-router-dom";
import logo from "../assets/kIAQ_.png";

export default function Footer() {
  return (
    <footer className="bg-[#fff2eb] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP ROW: Logo → Big Gap → Icons */}
        <div className="flex items-center justify-between">

          {/* Left: Logo */}
          <img
            src={logo}
            alt="KIAQ"
            className="h-10 object-contain opacity-90"
          />

          {/* Right: Social Icons */}
          <div className="flex items-center gap-8 text-[#0b3b3d] text-2xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* COPYRIGHT under icons */}
        <div className="flex justify-end mt-3 pr-1">
          <p className="text-[#0b3b3d] text-sm tracking-wide">
            © 2025 KIAQ, All Rights Reserved.
          </p>
        </div>

        {/* BOTTOM LINKS CENTERED */}
        <div className="flex items-end justify-end gap-4 text-sm text-gray-600 mt-3">
  <Link to="/privacy">Privacy Policy</Link>
  <span>✦</span>
  <Link to="/terms">Terms</Link>
  <span>✦</span>
  <Link to="/cookies">Cookie Preferences</Link>
  <span>✦</span>
  <Link to="/code-of-conduct">Code of Conduct</Link>
</div>

      </div>
    </footer>
  );
}

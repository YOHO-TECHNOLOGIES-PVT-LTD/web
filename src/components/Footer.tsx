import { Link } from "react-router-dom";
import logo from "../assets/kIAQ_.png";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">

        {/* TWO COLUMN LAYOUT */}
        <div className="footer-grid">

          {/* LEFT SECTION - LOGO */}
          <div className="footer-logo-section">
            <img
              src={logo}
              alt="KIAQ"
              className="footer-logo"
            />
          </div>

          {/* RIGHT SECTION - EVERYTHING ELSE */}
          <div className="footer-content-section">

            {/* Social Icons */}
            <div className="footer-social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>

            {/* COPYRIGHT */}
            <p className="footer-copyright">
              © 2025 KIAQ, All Rights Reserved.
            </p>

            {/* BOTTOM LINKS */}
            <div className="footer-links">
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <span className="footer-separator">✦</span>
              <Link to="/terms" className="footer-link">Terms</Link>
              <span className="footer-separator">✦</span>
              <Link to="/cookies" className="footer-link">Cookie Preferences</Link>
              <span className="footer-separator">✦</span>
              <Link to="/code-of-conduct" className="footer-link">Code of Conduct</Link>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .footer-wrapper {
          background-color: #fff2eb;
          padding-top: 3rem;
          padding-bottom: 2.5rem;
        }

        @media (max-width: 640px) {
          .footer-wrapper {
            padding-top: 2.5rem;
            padding-bottom: 2rem;
          }
        }

        .footer-container {
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        @media (max-width: 640px) {
          .footer-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (min-width: 768px) {
          .footer-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            gap: 2rem;
          }
        }

        /* LEFT SECTION - LOGO */
        .footer-logo-section {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 640px) {
          .footer-logo-section {
            justify-content: flex-start;
            align-items: flex-start;
          }
        }

        .footer-logo {
          width: 250px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          opacity: 0.9;
        }

        @media (max-width: 640px) {
          .footer-logo {
            width: 200px;
          }
        }

        @media (max-width: 400px) {
          .footer-logo {
            width: 180px;
          }
        }

        /* RIGHT SECTION - CONTENT */
        .footer-content-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .footer-content-section {
            align-items: flex-end;
          }
        }

        /* SOCIAL ICONS */
        .footer-social-icons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          color: #0b3b3d;
          font-size: 1.5rem;
        }

        @media (min-width: 640px) {
          .footer-social-icons {
            justify-content: flex-end;
          }
        }

        @media (max-width: 640px) {
          .footer-social-icons {
            gap: 1.25rem;
            font-size: 1.375rem;
          }
        }

        .footer-social-icons i {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .footer-social-icons i:hover {
          opacity: 0.7;
          transform: translateY(-2px);
        }

        /* COPYRIGHT */
        .footer-copyright {
          color: #0b3b3d;
          font-size: 0.875rem;
          letter-spacing: 0.025em;
          text-align: center;
          margin: 0;
        }

        @media (min-width: 640px) {
          .footer-copyright {
            text-align: right;
          }
        }

        @media (max-width: 640px) {
          .footer-copyright {
            font-size: 0.8125rem;
          }
        }

        /* FOOTER LINKS */
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: #4b5563;
        }

        @media (min-width: 640px) {
          .footer-links {
            justify-content: flex-end;
          }
        }

        @media (max-width: 640px) {
          .footer-links {
            font-size: 0.8125rem;
            gap: 0.5rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 400px) {
          .footer-links {
            font-size: 0.75rem;
            gap: 0.375rem;
          }
        }

        .footer-link {
          color: #4b5563;
          text-decoration: none;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .footer-link:hover {
          color: #0b3b3d;
        }

        .footer-separator {
          color: #4b5563;
          user-select: none;
        }

        @media (max-width: 640px) {
          .footer-separator {
            font-size: 0.75rem;
          }
        }

        /* Better wrapping for small screens */
        @media (max-width: 480px) {
          .footer-links {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
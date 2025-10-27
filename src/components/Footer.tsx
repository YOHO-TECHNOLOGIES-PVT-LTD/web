// import { UI_CONSTANTS } from '../constants/colors';
import logo from '../assets/kIAQ_.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <img 
              src={logo} 
              alt="KIAQ" 
              className="h-10 mb-6"
            />
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Building the future of work by connecting global companies with Africa's top talent.
            </p>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Staff Augmentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Dedicated Teams
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Project-Based
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 KIAQ. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
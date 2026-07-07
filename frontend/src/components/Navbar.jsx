import React, {useState} from 'react'
import { CiInstagram } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { PiWhatsappLogoLight } from "react-icons/pi";

export default function Navbar({ onOpenInquiry, onOpenRegistration,navigateToSection, }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1B5C52] backdrop-blur border-b border-[#FFFFFF33] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-3xl font-serif font-bold text-white">
              Cook<span className="text-orange-400 font-sans font-semibold ml-0.5">Hire</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              type="button"
              onClick={() => navigateToSection("how-it-works")}
              className="text-white hover:text-orange-400 font-medium transition-colors"
            >
              How it Works
            </button>

            <button
              type="button"
              onClick={() => navigateToSection("areas-we-serve")}
              className="text-white hover:text-orange-400 font-medium transition-colors"
            >
              Areas We Serve
            </button>
            <button
              type="button"
              onClick={() => onOpenRegistration?.()}
              className="text-white hover:text-orange-400 font-medium transition-colors"
            >
              Become a Cook
            </button>
            
            
            <button
              type="button"
              onClick={() => onOpenInquiry?.()}
              className="bg-orange-400 hover:bg-orange-600 text-white font-medium px-6 py-2.5 rounded-md transition-all shadow-sm hover:shadow cursor-pointer"
            >
              Hire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // X Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
{/* Mobile Menu */}
{isOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/20 z-40 md:hidden"
      onClick={() => setIsOpen(false)}
    />

    {/* Drawer */}
<div
  className={`fixed top-3 right-3 z-[60] w-[280px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden md:hidden
  ${isOpen
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
  }
  md:hidden`}
>
      {/* Close Button */}
      <div className="flex justify-end p-3 pb-0">
        <button
          onClick={() => setIsOpen(false)}
          className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-gray-100"
        >
          ✕
        </button>
      </div>

      {/* Menu */}
       <div className="px-6 pb-6 pt-2 space-y-5">

        <button
          onClick={() => {
            setIsOpen(false);
            navigateToSection("how-it-works");
          }}
          className="block w-full text-left text-[16px] text-gray-700 hover:text-orange-500 transition"
        >
          How it Works
        </button>

        <button
          onClick={() => {
            setIsOpen(false);
            navigateToSection("areas-we-serve");
          }}
          className="block w-full text-left text-[16px] text-gray-700 hover:text-orange-500 transition"
        >
          Areas We Serve
        </button>

        <button
          onClick={() => {
            setIsOpen(false);
            onOpenRegistration?.();
          }}
          className="block w-full text-left text-[16px] text-gray-700 hover:text-orange-500 transition"
        >
          Become a Cook
        </button>

        <button
          onClick={() => {
            setIsOpen(false);
            navigateToSection("footer");
          }}
          className="block w-full text-left text-[16px] text-gray-700 hover:text-orange-500 transition"
        >
          Contact us
        </button>

        <button
          onClick={() => {
            setIsOpen(false);
            onOpenInquiry?.();
          }}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Hire Cook
        </button>

        <div className="border-t border-dashed border-gray-300"></div>

        <p className="text-xs text-gray-500 py-2">
          © 2026 CookHire. All rights reserved.
        </p>

        <div className="border-t border-dashed border-gray-300"></div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 pt-2 text-gray-500">

          {/* Instagram */}
          <a href="#">
            <CiInstagram size={20} />
          </a>

          {/* Facebook */}
          <a href="#">
            <RiFacebookBoxLine size={20} />
          </a>

          {/* WhatsApp */}
          <a href="#">
            <PiWhatsappLogoLight size={20} />
          </a>

        </div>

      </div>
    </div>
  </>
)}
    </nav>
  )
}

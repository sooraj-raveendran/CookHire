import React, {useState} from 'react'

export default function Navbar({ onOpenInquiry, onOpenRegistration,navigateToSection, }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-serif font-bold text-slate-800">
              Cook<span className="text-orange-600 font-sans font-semibold ml-0.5">Hire</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              type="button"
              onClick={() => onOpenInquiry?.()}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Find a Cook
            </button>
            <button
              type="button"
              onClick={() => navigateToSection("cuisines")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Cuisines
            </button>
            <button
              type="button"
              onClick={() => navigateToSection("how-it-works")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              How it Works
            </button>
            <button
              type="button"
              onClick={() => onOpenRegistration?.()}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              For Cooks
            </button>
            
            
            <button
              type="button"
              onClick={() => onOpenInquiry?.()}
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-2.5 rounded-full transition-all shadow-sm hover:shadow"
            >
              Find a Cook
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-orange-600 hover:bg-gray-50 focus:outline-none"
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
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <button
            type="button"
            onClick={() => { setIsOpen(false); onOpenInquiry?.(); }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
          >
            Find a Cook
          </button>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              navigateToSection("cuisines");
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
          >
            Cuisines
          </button>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              navigateToSection("how-it-works");
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
          >
            How it Works
          </button>
          <button
            type="button"
            onClick={() => { setIsOpen(false); onOpenRegistration?.(); }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
          >
            Become a Cook
          </button>
          <div className="pt-4 pb-2 px-3">
            <button
              type="button"
              onClick={() => { setIsOpen(false); onOpenInquiry?.(); }}
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors"
            >
              Find a Cook
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

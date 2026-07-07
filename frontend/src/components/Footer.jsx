import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = ({onOpenInquiry, onOpenRegistration, navigateToSection}) => {
  return (
    <footer className="bg-black text-white">
      <div className="w-full px-8 lg:px-12 xl:px-16 py-12">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Logo */}
            <div className="lg:w-[42%] mb-4 lg:mb-0">
            <h2 className="text-4xl font-bold">
              <span className="text-white">Cook</span>
              <span className="text-[#FF9D1B]">Hire</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#B5B5B5]">
              Chennai's most trusted platform to hire verified home cooks.
              Connecting skilled cooks with families across 38 localities
              since 2022.
            </p>
          </div>

          {/* Families */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-10 lg:mt-0 lg:flex lg:flex-row lg:gap-20">
          <div>
            <h3 className="uppercase font-semibold text-white text-base lg:text-lg mb-5">
              For Families
            </h3>

            <ul className="space-y-4 text-[#B5B5B5] text-sm">
              <li 
              onClick={onOpenInquiry}
              className="hover:text-[#FF9D1B] cursor-pointer transition">
                Hire a Cook
              </li>
              <li 
              onClick={() => navigateToSection("how-it-works")}
              className="hover:text-[#FF9D1B] cursor-pointer transition">
                How it Works
              </li>
              <li className="hover:text-[#FF9D1B] cursor-pointer transition">
                Pricing
              </li>
              <li 
              onClick={() => navigateToSection("areas-we-serve")}
              className="hover:text-[#FF9D1B] cursor-pointer transition">
                Area We Serve
              </li>
              <li className="hover:text-[#FF9D1B] cursor-pointer transition">
                FAQs
              </li>
            </ul>
          </div>

          {/* Cooks */}
          <div>
            <h3 className="uppercase font-semibold text-white text-base lg:text-lg mb-5">
              For Cooks
            </h3>

            <ul className="space-y-4 text-[#B5B5B5] text-sm">
              <li
              onClick={onOpenRegistration} 
              className="hover:text-[#FF9D1B] cursor-pointer transition">
                Join as a Cook
              </li>
              <li className="hover:text-[#FF9D1B] cursor-pointer transition">
                Cook Benefits
              </li>
              <li className="hover:text-[#FF9D1B] cursor-pointer transition">
                Guidelines
              </li>
              <li className="hover:text-[#FF9D1B] cursor-pointer transition">
                Earning Guide
              </li>
              <li className="hover:text-[#FF9D1B] cursor-pointer transition">
                Cook Support
              </li>
            </ul>
          </div>

          {/* Contact */}
          
          <div className="col-span-2 lg:col-span-1">
            <h3 className="uppercase font-semibold text-white text-base lg:text-lg mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-[#B5B5B5] text-sm">

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[#FF9D1B]"
                />
                <span>+91 98400 XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle
                  size={18}
                  className="text-[#FF9D1B]"
                />
                <span>WhatsApp Us</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[#FF9D1B]"
                />
                <span>hello@cookhire.in</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#FF9D1B] mt-1"
                />
                <span>Chennai, Tamil Nadu</span>
              </div>

            </div>
          </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2A2A] my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-sm text-[#B5B5B5]">

          <p>© 2026 CookHire. All rights reserved.</p>

          <p>
            Made with ❤️ Geekstack
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
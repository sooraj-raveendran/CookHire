import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import CookHero from './components/CookHero'
import CookHiringPlatform from './components/CookHiringPlatform'
import CookHireLanding from './components/CookHireLanding'
import CustomerInquiryPage from './components/CustomerInquiryPage'
import CookRegistrationPage from './components/CookRegistrationPage'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
const [page, setPage] = useState("home");
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [page]);

const openInquiry = () => setPage("inquiry");
const openRegistration = () => setPage("registration");
const goHome = () => setPage("home");

const navigateToSection = (sectionId) => {
  // Go to the home page first
  setPage("home");

  // Wait until the home page is rendered
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <Navbar onOpenInquiry={openInquiry} 
      onOpenRegistration={openRegistration}
      navigateToSection={navigateToSection}
      />
      <main className="flex-1 pt-2 pb-5">
  {page === "registration" ? (
    <CookRegistrationPage onClose={goHome} />
  ) : page === "inquiry" ? (
    <CustomerInquiryPage onClose={goHome} />
  ) : (
    <>
      <CookHero
        onOpenInquiry={openInquiry}
        onOpenRegistration={openRegistration}
      />
      <CookHiringPlatform />
      <CookHireLanding
        onOpenInquiry={openInquiry}
        onOpenRegistration={openRegistration}
      />
      <Testimonials />
    </>
  )}
</main>
      <Footer onOpenInquiry={openInquiry} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  )
}

export default App

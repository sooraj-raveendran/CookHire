import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import CookHero from "./components/CookHero";
import ProcessSection from "./components/ProcessSection";
import Coverage from "./components/Coverage";
import WhyCookHire from "./components/WhyCookHire";
import Started from "./components/Started";
import CookRegistrationPage from "./components/CookRegistrationModal";
import CookRegistrationSuccess from "./components/CookRegistrationSuccess";
import Footer from "./components/Footer";
import FindCookForm from "./components/FindCookForm";
import FindCookSuccess from "./components/FindCookSuccess";
import findingCookGif from "./assets/findcooksuccess.gif";
import cookSuccessGif from "./assets/success.gif";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Controls the registration page
  const [page, setPage] = useState("home");
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  // Controls the Find Cook popup
  const [showFindCookForm, setShowFindCookForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCookSuccess, setShowCookSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  // Open/Close Find Cook Modal
  const openInquiry = () => setShowFindCookForm(true);
  const closeInquiry = () => setShowFindCookForm(false);

  // Registration Page
  const openRegistration = () => setShowRegistrationModal(true);
  const closeRegistration = () => setShowRegistrationModal(false);

  const goHome = () => setPage("home");

  // Navbar scrolling
  const navigateToSection = (sectionId) => {
    if (page !== "home") {
      setPage("home");
    }

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
    <div className="min-h-screen flex flex-col bg-[#1B5C52]">
      <Navbar
        onOpenInquiry={openInquiry}
        onOpenRegistration={openRegistration}
        navigateToSection={navigateToSection}
      />

      <main className="flex-1 pt-2">
        {page === "home" && (
          <>
            <CookHero
              onOpenInquiry={openInquiry}
              onOpenRegistration={openRegistration}
            />

            <ProcessSection 
            onOpenInquiry={openInquiry}
            onOpenRegistration={openRegistration}
            />

            <Coverage />

            <WhyCookHire />

            <Started
              onOpenInquiry={openInquiry}
              onOpenRegistration={openRegistration}
            />
          </>
        )}

        
      </main>

      <Footer 
        onOpenInquiry={openInquiry}
        onOpenRegistration={openRegistration}
        navigateToSection={navigateToSection}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {/* Find Cook Modal */}
      {showFindCookForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeInquiry}
        >
          <div
            className="w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <FindCookForm
              onClose={closeInquiry}
              onSuccess={() => {
                setShowFindCookForm(false); // Close the form
                setShowSuccess(true);       // Show success popup
              }}
            />
          </div>
        </div>
              )}
              {showRegistrationModal && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                  onClick={closeRegistration}
                >
                  <div
                    className="w-full max-w-5xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <CookRegistrationPage
                      onClose={closeRegistration}
                      onSuccess={() => {
                        setShowRegistrationModal(false); // Close registration form
                        setShowCookSuccess(true);        // Show success popup
                      }}
                    />
                  </div>
                </div>
              )}
              <FindCookSuccess
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                gif={findingCookGif}
              />
              <CookRegistrationSuccess
                isOpen={showCookSuccess}
                onClose={() => setShowCookSuccess(false)}
                gif={cookSuccessGif}
              />
        </div>
  );
}

export default App;
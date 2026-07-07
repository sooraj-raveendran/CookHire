import React from "react";

export default function FindCookSuccess({
  isOpen,
  onClose,
  gif,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40  px-4">
      <div
        className="
          w-full
          max-w-[340px]
          sm:max-w-md
          bg-white
          rounded-[24px]
          sm:rounded-[30px]
          shadow-2xl
          px-6
          sm:px-8
          py-6
          sm:py-8
          animate-[fadeIn_.25s_ease]
        "
      >
        {/* GIF */}
        <div className="flex justify-center">
          <img
            src={gif}
            alt="Finding Cook"
            className="
              w-24 h-24
              sm:w-32 sm:h-32
              object-contain
            "
          />
        </div>

        {/* Heading */}
        <h2
          className="
            mt-2
            text-center
            font-bold
            text-[#1B5C52]
            text-[30px]
            sm:text-4xl
            leading-tight
          "
        >
          We're Finding Your Cook!
        </h2>

        {/* Description */}
        <p
          className="
            mt-3
            text-center
            text-gray-500
            text-[13px]
            sm:text-[15px]
            leading-5
            sm:leading-6
            px-2
          "
        >
          Your request has been submitted. Our team is matching
          you with verified cooks in your area. Expect profiles
          on WhatsApp within 2 hours.
        </p>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="
              bg-[#FF9D1B]
              hover:bg-[#E88C0A]
              text-white
              font-semibold
              rounded-lg
              px-8
              py-2.5
              text-sm
              shadow-md
              transition
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
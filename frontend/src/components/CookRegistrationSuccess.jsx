
export default function CookRegistrationSuccess({
  isOpen,
  onClose,
  gif,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md p-8 text-center shadow-xl">
        <img
          src={gif}
          alt="Success"
          className="w-28 h-28 mx-auto"
        />

        <h2 className="text-3xl font-bold text-[#0F766E] mt-2">
          Application Submitted!
        </h2>

        <p className="text-gray-500 mt-4 leading-6">
          Thank you for registering as a cook on CookHire.
          <br />
          Our team will review your profile and contact you
          within 24–48 hours.
        </p>

        <button
          onClick={onClose}
          className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
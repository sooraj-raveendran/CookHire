import { UploadCloud } from "lucide-react";

const UploadCard = ({
  title,
  subtitle,
  field,
  formData,
  setFormData,
  required = false,
}) => {
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      [field]: file,
    });
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {title}
        {required && <span className="text-red-500">*</span>}
      </label>

      <label className="border border-dashed border-gray-300 rounded-xl h-24 flex flex-col items-center justify-center cursor-pointer bg-white hover:border-orange-500 transition">
        <UploadCloud size={20} className="text-orange-500" />

          <p className="mt-2 text-xs font-medium text-center px-2">
            {formData[field]
              ? formData[field].name
              : `Upload ${title}`}
          </p>

          <span className="text-[10px] text-gray-400 text-center px-2">
            {subtitle}
          </span>

        <input
          type="file"
          hidden
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFile}
        />

      </label>
    </div>
  );
};

export default function IdentityStep({
  formData,
  setFormData,
}) {
  return (
    <div>

      <p className="text-sm text-gray-500 mb-6">
        All documents are stored securely and used only for
        background verification.
      </p>

      <div className="grid grid-cols-2 gap-4">

        <UploadCard
          title="Aadhaar Card"
          subtitle="Front & Back (JPG/PDF)"
          field="aadhaar"
          formData={formData}
          setFormData={setFormData}
          required
        />

        <UploadCard
          title="PAN Card"
          subtitle="Optional"
          field="pan"
          formData={formData}
          setFormData={setFormData}
        />

        <UploadCard
          title="Police Verification Certificate"
          subtitle="Within 6 Months"
          field="policeCertificate"
          formData={formData}
          setFormData={setFormData}
          required
        />

        <UploadCard
          title="Certificates"
          subtitle="Skills or Experience"
          field="certificate"
          formData={formData}
          setFormData={setFormData}
          required
        />

        <UploadCard
          title="Driving License"
          subtitle="Optional"
          field="drivingLicense"
          formData={formData}
          setFormData={setFormData}
        />

      </div>

    </div>
  );
}
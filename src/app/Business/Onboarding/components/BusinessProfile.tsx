import { OnboardingStepProps } from "../types";
import { ChevronLeft, ChevronRight, Check, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

const businessTypes = [
  "Individual Seller",
  "Small Business",
  "Enterprise",
  "Non-Profit",
  "Other",
];

export const BusinessProfile = ({ formData, setFormData, nextStep, prevStep }: OnboardingStepProps) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const name = target.name;
    let value: any;

    if (target instanceof HTMLInputElement) {
      if (target.type === "file") {
        value = target.files && target.files[0];
      } else {
        value = target.value;
      }
    } else {
      value = target.value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return formData.storeName && formData.businessType && formData.tagline;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Business Profile
        </h2>
        <p className="text-gray-600">
          Let's set up your store identity
        </p>
      </div>

      <div className="space-y-6">
        <div className="group">
          <label
            className="block text-sm font-semibold text-gray-700 mb-3"
            htmlFor="storeName"
          >
            Store Name *
          </label>
          <input
            type="text"
            id="storeName"
            name="storeName"
            value={formData.storeName}
            onChange={handleInputChange}
            placeholder="e.g. Fashion Haven"
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
            required
          />
        </div>

        <div className="group">
          <label
            className="block text-sm font-semibold text-gray-700 mb-3"
            htmlFor="businessType"
          >
            Business Type *
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 group-hover:border-gray-300"
            required
          >
            <option value="">Select your business type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="group">
          <label
            className="block text-sm font-semibold text-gray-700 mb-3"
            htmlFor="tagline"
          >
            Tagline *
          </label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleInputChange}
            placeholder="Short description of your business"
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
            required
          />
        </div>

        <div className="group">
          <label
            className="block text-sm font-semibold text-gray-700 mb-3"
            htmlFor="businessLogo"
          >
            Logo
            <span className="text-gray-400 font-normal"> (Optional)</span>
          </label>
          <div className="relative">
            <label className="flex flex-col items-center justify-center w-full h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                <p className="mb-2 text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG or GIF (MAX. 5MB)
                </p>
              </div>
              <input
                type="file"
                id="businessLogo"
                name="businessLogo"
                onChange={handleInputChange}
                className="hidden"
                accept="image/*"
              />
            </label>
            {formData.businessLogo && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm text-green-700 font-medium">
                  {formData.businessLogo.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Store Preview */}
      <div className="mt-8 bg-gray-50 p-6 rounded-2xl border border-gray-200">
        <h3 className="font-semibold text-gray-700 mb-4">Store Preview</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            {formData.businessLogo ? (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <Image
                  src={URL.createObjectURL(formData.businessLogo)}
                  alt="Store logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
            )}
            <div className="ml-3">
              <h4 className="font-bold text-gray-900">
                {formData.storeName || "Your Store Name"}
              </h4>
              <p className="text-sm text-gray-500">
                {formData.tagline || "Your store tagline"}
              </p>
            </div>
          </div>
          <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center text-gray-400">
            Storefront preview will appear here
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={prevStep}
          disabled={true}
          className="inline-flex items-center px-6 py-3 text-gray-400 bg-gray-100 rounded-2xl font-semibold cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={!isFormValid()}
          className={`inline-flex items-center px-8 py-3 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 ${
            !isFormValid()
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105 focus:ring-blue-300"
          }`}
        >
          Continue
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};
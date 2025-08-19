import { OnboardingStepProps } from "../types";
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';

export const ProductUpload = ({ formData, setFormData, nextStep, prevStep }: OnboardingStepProps) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, productPhoto: e.target.files![0] }));
    }
  };

  const isFormValid = () => {
    return (
      formData.productName &&
      formData.productPrice &&
      formData.productPhoto &&
      formData.productDescription
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Add Your First Product
        </h2>
        <p className="text-gray-600">
          Quick add - you can add more products later
        </p>
      </div>

      <div className="space-y-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-3" htmlFor="productName">
            Product Name *
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            placeholder="e.g. Premium Cotton T-Shirt"
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
            required
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-3" htmlFor="productPrice">
            Price *
          </label>
          <input
            type="text"
            id="productPrice"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleInputChange}
            placeholder="e.g. 29.99"
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
            required
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-3" htmlFor="productPhoto">
            Product Photo *
          </label>
          <div className="relative">
            <label className="flex flex-col items-center justify-center w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG or GIF (MAX. 5MB)
                </p>
              </div>
              <input
                type="file"
                id="productPhoto"
                name="productPhoto"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
                required
              />
            </label>
            {formData.productPhoto && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm text-green-700 font-medium">
                  {formData.productPhoto.name}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-3" htmlFor="productDescription">
            Description *
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleInputChange}
            placeholder="Describe your product in detail"
            rows={4}
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
            required
          />
        </div>
      </div>

      {/* Product Preview */}
      <div className="mt-8 bg-gray-50 p-6 rounded-2xl border border-gray-200">
        <h3 className="font-semibold text-gray-700 mb-4">Product Preview</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          {formData.productPhoto ? (
            <div className="h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
              <Image
                src={URL.createObjectURL(formData.productPhoto)}
                alt="Product preview"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              Product image will appear here
            </div>
          )}
          <h4 className="font-bold text-gray-900">
            {formData.productName || "Product Name"}
          </h4>
          <p className="text-lg font-bold text-blue-600 my-2">
            {formData.productPrice ? `$${formData.productPrice}` : "$0.00"}
          </p>
          <p className="text-sm text-gray-600">
            {formData.productDescription || "Product description will appear here"}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={prevStep}
          className="inline-flex items-center px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
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
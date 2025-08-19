import { OnboardingFormData } from "../types";
import { Check, Share2, Facebook, Twitter, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface GoLiveProps {
  formData: OnboardingFormData;
  submitForm: () => void;
}

export const GoLive = ({ formData, submitForm }: GoLiveProps) => {
  const storeUrl = `kaihma.com/store/${formData.storeName.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl mb-6 shadow-lg">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Congratulations! 🎉
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Your store is now ready to go live. Share your unique store link
          and start selling to customers.
        </p>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="text-sm font-medium text-gray-500 mb-2">
            Your store URL:
          </div>
          <div className="text-xl font-bold text-blue-600 break-all">
            {storeUrl}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-300">
            <Facebook className="w-5 h-5 mr-2" />
            Share on Facebook
          </button>
          <button className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-2xl font-semibold hover:bg-gray-800 transition-colors duration-300">
            <Twitter className="w-5 h-5 mr-2" />
            Share on Twitter
          </button>
        </div>
      </div>

      <button
        onClick={submitForm}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <ArrowRight className="w-5 h-5 mr-2" />
        Go to Your Store
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};
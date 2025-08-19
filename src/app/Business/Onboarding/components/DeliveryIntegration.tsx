import { OnboardingStepProps } from "../types";
import { ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';

const courierPartners = [
  { id: "gig", name: "GIG Logistics" },
  { id: "dhl", name: "DHL" },
  { id: "local", name: "Local Logistics Partner" },
];

export const DeliveryIntegration = ({ formData, setFormData, nextStep, prevStep }: OnboardingStepProps) => {
  const handleCourierSelect = (courierId: string) => {
    setFormData((prev) => ({ ...prev, courierPartner: courierId }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Delivery Integration
        </h2>
        <p className="text-gray-600">
          Set up how you'll deliver products to customers
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Courier Partner *
          </label>
          <div className="space-y-3">
            {courierPartners.map((partner) => (
              <label
                key={partner.id}
                className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  formData.courierPartner === partner.id
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  name="courierPartner"
                  value={partner.id}
                  checked={formData.courierPartner === partner.id}
                  onChange={() => handleCourierSelect(partner.id)}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">
                    {partner.name}
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.courierPartner === partner.id
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.courierPartner === partner.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-800">
                Delivery Tracking Benefits
              </h3>
              <div className="mt-2 text-sm text-amber-700">
                <p>
                  Integrating with a courier partner provides:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Real-time tracking for customers</li>
                  <li>Proof of delivery documentation</li>
                  <li>Reduced disputes and returns</li>
                  <li>Professional shipping experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={nextStep}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Skip for now, I'll set this up later
          </button>
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
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Continue
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};
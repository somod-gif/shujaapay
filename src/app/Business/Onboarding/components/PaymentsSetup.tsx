import { OnboardingStepProps } from "../types";
import { ChevronLeft, ChevronRight, Check, Shield, Wallet, Banknote } from 'lucide-react';
import { PaymentProviderLogo } from './PaymentProviderLogo';

const paymentProviders = [
  { id: "paystack", name: "Paystack" },
  { id: "flutterwave", name: "Flutterwave" },
];

export const PaymentsSetup = ({ formData, setFormData, nextStep, prevStep }: OnboardingStepProps) => {
  const handlePaymentProviderToggle = (providerId: string) => {
    setFormData((prev) => {
      const providers = [...prev.connectedPaymentProviders];
      const index = providers.indexOf(providerId);

      if (index === -1) {
        providers.push(providerId);
      } else {
        providers.splice(index, 1);
      }

      return { ...prev, connectedPaymentProviders: providers };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method: "direct" | "escrow") => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const isFormValid = () => {
    return formData.connectedPaymentProviders.length > 0;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Payments Setup
        </h2>
        <p className="text-gray-600">
          Configure how you'll receive payments
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Payment Method *
          </label>
          <div className="space-y-3">
            <label
              className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                formData.paymentMethod === "direct"
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="direct"
                checked={formData.paymentMethod === "direct"}
                onChange={() => handlePaymentMethodChange("direct")}
                className="sr-only"
              />
              <div className="text-2xl mr-4">
                <Wallet className="text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">
                  Direct Payment
                </div>
                <div className="text-sm text-gray-500">
                  Receive payments directly to your account
                </div>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.paymentMethod === "direct"
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {formData.paymentMethod === "direct" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </label>

            <label
              className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                formData.paymentMethod === "escrow"
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="escrow"
                checked={formData.paymentMethod === "escrow"}
                onChange={() => handlePaymentMethodChange("escrow")}
                className="sr-only"
              />
              <div className="text-2xl mr-4">
                <Shield className="text-green-500" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">
                  Escrow Payment
                </div>
                <div className="text-sm text-gray-500">
                  Funds held until buyer confirms delivery
                </div>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.paymentMethod === "escrow"
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {formData.paymentMethod === "escrow" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Connect Payment Providers *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentProviders.map((provider) => (
              <label
                key={provider.id}
                className={`relative flex flex-col items-center p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  formData.connectedPaymentProviders.includes(provider.id)
                    ? "border-purple-500 bg-purple-50 shadow-md"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.connectedPaymentProviders.includes(provider.id)}
                  onChange={() => handlePaymentProviderToggle(provider.id)}
                  className="sr-only"
                />
                <div className="mb-3">
                  <PaymentProviderLogo providerId={provider.id} />
                </div>
                <div className="font-semibold text-gray-900 text-center">
                  {provider.name}
                </div>
                {formData.connectedPaymentProviders.includes(provider.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </label>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Connect additional payment providers to give customers more payment options
          </p>
        </div>

        <div className="space-y-4">
          <div className="group">
            <label
              className="block text-sm font-semibold text-gray-700 mb-3"
              htmlFor="bankAccount"
            >
              Bank Account Number
            </label>
            <input
              type="text"
              id="bankAccount"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleInputChange}
              placeholder="Enter your account number"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
            />
          </div>

          <div className="group">
            <label
              className="block text-sm font-semibold text-gray-700 mb-3"
              htmlFor="mobileMoney"
            >
              Mobile Money Number
            </label>
            <input
              type="text"
              id="mobileMoney"
              name="mobileMoney"
              value={formData.mobileMoney}
              onChange={handleInputChange}
              placeholder="Enter your mobile money number"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
            />
          </div>
        </div>

        {formData.paymentMethod === "escrow" && (
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <div className="ml-3">
                <div className="flex items-center mb-2">
                  <span className="font-semibold text-gray-900">
                    Escrow Protection Enabled
                  </span>
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Recommended
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Funds are held securely until delivery is confirmed. This builds trust with customers and reduces disputes.
                </p>
              </div>
            </div>
          </div>
        )}
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
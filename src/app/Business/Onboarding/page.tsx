"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Onboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{
    storeName: string;
    businessCategory: string;
    businessLogo: File | null;
    location: string;
    deliveryMethod: string;
    payOnDelivery: boolean;
    paymentMethod: string;
    escrowEnabled: boolean;
    connectedPaymentProviders: string[];
  }>({
    storeName: "",
    businessCategory: "",
    businessLogo: null,
    location: "",
    deliveryMethod: "kaihma",
    payOnDelivery: false,
    paymentMethod: "wallet",
    escrowEnabled: true,
    connectedPaymentProviders: [],
  });

  const businessCategories = [
    "Fashion & Apparel",
    "Electronics",
    "Food & Groceries",
    "Beauty & Cosmetics",
    "Home & Living",
    "Health & Wellness",
    "Digital Services",
    "Other",
  ];

  const paymentProviders = [
    { id: "paystack", name: "Paystack", logo: "💳" },
    { id: "flutterwave", name: "Flutterwave", logo: "🦋" },
    { id: "stripe", name: "Stripe", logo: "💎" },
  ];

  const steps = [
    { number: 1, title: "Welcome", description: "Get started" },
    { number: 2, title: "Store Info", description: "Basic details" },
    { number: 3, title: "Delivery", description: "Logistics setup" },
    { number: 4, title: "Payment", description: "Final setup" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const name = target.name;
    let value: any;

    if (target instanceof HTMLInputElement) {
      if (target.type === "checkbox") {
        value = target.checked;
      } else if (target.type === "file") {
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

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const submitForm = () => {
    console.log("Form submitted:", formData);
    router.push("/Business/Dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
            Welcome to KAIHMA
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your business with our powerful e-commerce platform. Let's
            get you set up in minutes.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
          {/* Enhanced Progress Bar */}
          <div className="bg-white/50 px-8 py-6 border-b border-gray-100">
            <div className="flex justify-between items-center mb-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center relative"
                >
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-4 left-8 w-full h-0.5 -z-10 transition-all duration-500 ${
                        currentStep > step.number
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                          : "bg-gray-200"
                      }`}
                      style={{ width: "calc(100% + 2rem)" }}
                    />
                  )}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= step.number
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-110"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <div
                    className={`text-xs font-medium mt-2 transition-colors duration-300 ${
                      currentStep >= step.number
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div
                    className={`text-xs mt-1 transition-colors duration-300 ${
                      currentStep >= step.number
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                  >
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 lg:p-12">
            {currentStep === 1 && (
              <div className="text-center max-w-2xl mx-auto">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl mb-6 shadow-lg">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Launch Your Store?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Join thousands of successful merchants who trust KAIHMA to
                    power their online business. Our streamlined setup process
                    will have you selling in no time.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Lightning Fast
                      </h3>
                      <p className="text-sm text-gray-600">
                        Setup in under 5 minutes
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Secure & Trusted
                      </h3>
                      <p className="text-sm text-gray-600">
                        Bank-level security
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-100">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0v16a1 1 0 001 1h8a1 1 0 001-1V4M7 4h10"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Full Support
                      </h3>
                      <p className="text-sm text-gray-600">
                        24/7 customer care
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={nextStep}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <span className="mr-2">Let's Get Started</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Tell Us About Your Store
                  </h2>
                  <p className="text-gray-600">
                    Let's start with the basics to personalize your experience
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
                      placeholder="Enter your store name"
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
                      required
                    />
                  </div>

                  <div className="group">
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-3"
                      htmlFor="businessCategory"
                    >
                      Business Category *
                    </label>
                    <select
                      id="businessCategory"
                      name="businessCategory"
                      value={formData.businessCategory}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 group-hover:border-gray-300"
                      required
                    >
                      <option value="">Select your business category</option>
                      {businessCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="group">
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-3"
                      htmlFor="businessLogo"
                    >
                      Business Logo{" "}
                      <span className="text-gray-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <div className="relative">
                      <label className="flex flex-col items-center justify-center w-full h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group">
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
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
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
                          <svg
                            className="w-5 h-5 text-green-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-sm text-green-700 font-medium">
                            {formData.businessLogo.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-10">
                  <button
                    onClick={prevStep}
                    className="inline-flex items-center px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.storeName || !formData.businessCategory}
                    className={`inline-flex items-center px-8 py-3 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 ${
                      !formData.storeName || !formData.businessCategory
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105 focus:ring-blue-300"
                    }`}
                  >
                    Continue
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Location & Delivery Setup
                  </h2>
                  <p className="text-gray-600">
                    Configure your delivery preferences and location
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="group">
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-3"
                      htmlFor="location"
                    >
                      Business Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Nigeria, Lagos State, Victoria Island"
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Delivery Method *
                    </label>
                    <div className="space-y-3">
                      {[
                        {
                          value: "kaihma",
                          title: "KAIHMA Delivery Network",
                          description:
                            "Let us handle deliveries with our trusted partners",
                          icon: "🚚",
                        },
                        {
                          value: "own",
                          title: "Own Logistics",
                          description: "Use your own delivery system",
                          icon: "📦",
                        },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                            formData.deliveryMethod === option.value
                              ? "border-blue-500 bg-blue-50 shadow-md"
                              : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          <input
                            type="radio"
                            name="deliveryMethod"
                            value={option.value}
                            checked={formData.deliveryMethod === option.value}
                            onChange={() =>
                              setFormData((prev) => ({
                                ...prev,
                                deliveryMethod: option.value,
                              }))
                            }
                            className="sr-only"
                          />
                          <div className="text-2xl mr-4">{option.icon}</div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">
                              {option.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {option.description}
                            </div>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              formData.deliveryMethod === option.value
                                ? "border-blue-500 bg-blue-500"
                                : "border-gray-300"
                            }`}
                          >
                            {formData.deliveryMethod === option.value && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
                    <label className="flex items-start space-x-4 cursor-pointer">
                      <input
                        type="checkbox"
                        name="payOnDelivery"
                        checked={formData.payOnDelivery}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2">💰</span>
                          <span className="font-semibold text-gray-900">
                            Enable Pay on Delivery (POD)
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Allow customers to pay when they receive their order.
                          This can increase conversion rates but may have higher
                          return rates.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between mt-10">
                  <button
                    onClick={prevStep}
                    className="inline-flex items-center px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.location}
                    className={`inline-flex items-center px-8 py-3 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 ${
                      !formData.location
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105 focus:ring-blue-300"
                    }`}
                  >
                    Continue
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Payment Configuration
                  </h2>
                  <p className="text-gray-600">
                    Set up your payment preferences to start receiving money
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Preferred Payment Method *
                    </label>
                    <div className="space-y-3">
                      {[
                        {
                          value: "wallet",
                          title: "KAIHMA Wallet",
                          description: "Fast, secure, and integrated payments",
                          icon: "💼",
                        },
                        {
                          value: "bank",
                          title: "Bank Transfer",
                          description: "Direct transfers to your bank account",
                          icon: "🏦",
                        },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                            formData.paymentMethod === option.value
                              ? "border-green-500 bg-green-50 shadow-md"
                              : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={option.value}
                            checked={formData.paymentMethod === option.value}
                            onChange={() =>
                              setFormData((prev) => ({
                                ...prev,
                                paymentMethod: option.value,
                              }))
                            }
                            className="sr-only"
                          />
                          <div className="text-2xl mr-4">{option.icon}</div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">
                              {option.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {option.description}
                            </div>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              formData.paymentMethod === option.value
                                ? "border-green-500 bg-green-500"
                                : "border-gray-300"
                            }`}
                          >
                            {formData.paymentMethod === option.value && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Connect Payment Providers{" "}
                      <span className="text-gray-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {paymentProviders.map((provider) => (
                        <label
                          key={provider.id}
                          className={`relative flex flex-col items-center p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                            formData.connectedPaymentProviders.includes(
                              provider.id
                            )
                              ? "border-purple-500 bg-purple-50 shadow-md"
                              : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.connectedPaymentProviders.includes(
                              provider.id
                            )}
                            onChange={() =>
                              handlePaymentProviderToggle(provider.id)
                            }
                            className="sr-only"
                          />
                          <div className="text-3xl mb-3">{provider.logo}</div>
                          <div className="font-semibold text-gray-900 text-center">
                            {provider.name}
                          </div>
                          {formData.connectedPaymentProviders.includes(
                            provider.id
                          ) && (
                            <div className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentView"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-3">
                      Connect additional payment providers to give customers
                      more payment options
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6">
                    <label className="flex items-start space-x-4 cursor-pointer">
                      <input
                        type="checkbox"
                        name="escrowEnabled"
                        checked={formData.escrowEnabled}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2">🛡️</span>
                          <span className="font-semibold text-gray-900">
                            Enable Escrow Protection
                          </span>
                          <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            Recommended
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Funds are held securely until delivery is confirmed.
                          This builds trust with customers and reduces disputes.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between mt-10">
                  <button
                    onClick={prevStep}
                    className="inline-flex items-center px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={submitForm}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Complete Setup
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

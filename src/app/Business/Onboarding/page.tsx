"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
} from "lucide-react";
import { ProgressSteps } from "./components/ProgressSteps";
import { BusinessProfile } from "./components/BusinessProfile";
import { ProductUpload } from "./components/ProductUpload";
import { PaymentsSetup } from "./components/PaymentsSetup";
import { DeliveryIntegration } from "./components/DeliveryIntegration";
import { GoLive } from "./components/GoLive";
import { OnboardingFormData } from "./types";

export default function Onboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Move steps array inside the component
  const steps = [
    { number: 1, title: "Business Profile", description: "Setup your store" },
    { number: 2, title: "Add Product", description: "Upload first item" },
    { number: 3, title: "Payments", description: "Configure payments" },
    { number: 4, title: "Delivery", description: "Shipping setup" },
    { number: 5, title: "Go Live", description: "Launch your store" },
  ];
  
  const [formData, setFormData] = useState<OnboardingFormData>({
    storeName: "",
    businessType: "",
    businessLogo: null,
    tagline: "",
    productName: "",
    productPrice: "",
    productPhoto: null,
    productDescription: "",
    paymentMethod: "direct",
    connectedPaymentProviders: [],
    bankAccount: "",
    mobileMoney: "",
    courierPartner: "",
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const submitForm = () => {
    console.log("Form submitted:", formData);
    router.push(
      `/store/${formData.storeName.toLowerCase().replace(/\s+/g, "-")}`
    );
  };

  const renderStep = () => {
    const commonProps = { formData, setFormData, nextStep, prevStep };
    const goToDashboard = () => {
      router.push("/Business/Dashboard");
    };

    switch (currentStep) {
      case 1:
        return <BusinessProfile {...commonProps} />;
      case 2:
        return <ProductUpload {...commonProps} />;
      case 3:
        return <PaymentsSetup {...commonProps} />;
      case 4:
        return <DeliveryIntegration {...commonProps} />;
      case 5:
        return (
          <GoLive
            formData={formData}
            submitForm={submitForm}
            goToDashboard={goToDashboard}
          />
        );
      default:
        return <BusinessProfile {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
            Welcome to KAIHMA
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your store ready to sell in minutes. Just follow these simple
            steps.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
          <ProgressSteps currentStep={currentStep} steps={steps} />
          <div className="p-8 lg:p-12">{renderStep()}</div>
        </div>
      </div>
    </div>
  );
}
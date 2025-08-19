export type OnboardingFormData = {
  storeName: string;
  businessType: string;
  businessLogo: File | null;
  tagline: string;
  productName: string;
  productPrice: string;
  productPhoto: File | null;
  productDescription: string;
  paymentMethod: "direct" | "escrow";
  connectedPaymentProviders: string[];
  bankAccount: string;
  mobileMoney: string;
  courierPartner: string;
};

export type OnboardingStepProps = {
  formData: OnboardingFormData;
  setFormData: React.Dispatch<React.SetStateAction<OnboardingFormData>>;
  nextStep: () => void;
  prevStep: () => void;
};
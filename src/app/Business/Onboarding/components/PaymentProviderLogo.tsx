import PaystackLogo from '@/../public/images/paystack-logo.png';
import FlutterwaveLogo from '@/../public/images/flutterwave-logo.png';
import Image from 'next/image';

export const PaymentProviderLogo = ({ providerId }: { providerId: string }) => {
  switch (providerId) {
    case 'paystack':
      return <Image src={PaystackLogo} alt="Paystack" className="h-8 w-auto" />;
    case 'flutterwave':
      return <Image src={FlutterwaveLogo} alt="Flutterwave" className="h-8 w-auto" />;
    default:
      return null;
  }
};
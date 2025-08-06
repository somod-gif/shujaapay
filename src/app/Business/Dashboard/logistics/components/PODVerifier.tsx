// app/Business/Dashboard/logistics/components/PODVerifier.tsx
'use client';
import React, { useState } from 'react';

interface PODVerifierProps {
  deliveryId: string;
}

const PODVerifier: React.FC<PODVerifierProps> = ({ deliveryId }) => {
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'verified' | 'failed'>('pending');
  const [amountReceived, setAmountReceived] = useState('');
  const [verificationMethod, setVerificationMethod] = useState<'signature' | 'otp' | null>(null);
  const [otp, setOtp] = useState('');

  const handleVerifyPayment = () => {
    // In a real app, this would communicate with your backend
    setVerificationStatus('verified');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Pay on Delivery Verification</h2>
      
      {verificationStatus === 'pending' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount Received
            </label>
            <input
              type="text"
              value={amountReceived}
              onChange={(e) => setAmountReceived(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter amount received"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Verification Method
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setVerificationMethod('signature')}
                className={`py-2 px-4 border rounded-md text-sm font-medium ${
                  verificationMethod === 'signature'
                    ? 'bg-blue-100 border-blue-500 text-blue-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Customer Signature
              </button>
              <button
                onClick={() => setVerificationMethod('otp')}
                className={`py-2 px-4 border rounded-md text-sm font-medium ${
                  verificationMethod === 'otp'
                    ? 'bg-blue-100 border-blue-500 text-blue-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                OTP Verification
              </button>
            </div>
          </div>

          {verificationMethod === 'otp' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter OTP from Customer
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="6-digit OTP"
              />
            </div>
          )}

          <button
            onClick={handleVerifyPayment}
            disabled={!amountReceived || !verificationMethod}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              !amountReceived || !verificationMethod
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-800 hover:bg-blue-700'
            }`}
          >
            Verify Payment
          </button>
        </div>
      ) : (
        <div className={`p-4 rounded-md ${
          verificationStatus === 'verified' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <div className="flex items-center">
            {verificationStatus === 'verified' ? (
              <>
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Payment verified successfully! Amount received: {amountReceived}</span>
              </>
            ) : (
              <>
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Payment verification failed. Please try again.</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PODVerifier;
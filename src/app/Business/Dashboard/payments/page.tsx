// app/Business/Dashboard/payments/page.tsx
'use client'
import React from 'react';
import EscrowFlow from './components/EscrowFlow';
import PayoutHistory from './components/PayoutHistory';

const PaymentsPage = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Payments</h1>
        <p className="text-gray-600 mt-2">Manage your escrow transactions and payout history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-800">
          <h2 className="text-xl font-semibold text-gray-800">Wallet Summary</h2>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-gray-500">Available Balance</p>
              <p className="text-2xl font-bold text-blue-800">₦245,800</p>
            </div>
            <div>
              <p className="text-gray-500">In Escrow</p>
              <p className="text-2xl font-bold text-blue-800">₦180,500</p>
            </div>
            <button className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200">
              Request Payout
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <EscrowFlow />
          <PayoutHistory />
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
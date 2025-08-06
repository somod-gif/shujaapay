// app/Business/Dashboard/payments/components/PayoutHistory.tsx
'use client';
import React from 'react';

const PayoutHistory = () => {
  const payoutHistory = [
    {
      id: '#PYT-1001',
      date: '2025-08-01',
      amount: '₦120,000',
      method: 'Bank Transfer',
      status: 'Completed',
    },
    {
      id: '#PYT-1002',
      date: '2025-07-25',
      amount: '₦85,500',
      method: 'KAIHMA Wallet',
      status: 'Completed',
    },
    {
      id: '#PYT-1003',
      date: '2025-07-18',
      amount: '₦64,200',
      method: 'Bank Transfer',
      status: 'Failed',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Payout History</h2>
        <button className="text-blue-800 hover:text-blue-600 font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {payoutHistory.map((payout) => (
          <div
            key={payout.id}
            className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-blue-800">{payout.id}</p>
                <p className="text-sm text-gray-500">{payout.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{payout.amount}</p>
                <div className="flex items-center justify-end mt-1">
                  <p className="text-sm text-gray-500 mr-2">{payout.method}</p>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      payout.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {payout.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayoutHistory;
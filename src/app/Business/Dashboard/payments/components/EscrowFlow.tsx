// app/Business/Dashboard/payments/components/EscrowFlow.tsx
'use client';
import React from 'react';

const EscrowFlow = () => {
  const escrowTransactions = [
    {
      id: '#ESC-1001',
      orderId: '#KHM-1001',
      amount: '₦25,400',
      status: 'Held',
      releaseDate: '2025-08-10',
    },
    {
      id: '#ESC-1002',
      orderId: '#KHM-1002',
      amount: '₦18,200',
      status: 'Released',
      releaseDate: '2025-08-05',
    },
    {
      id: '#ESC-1003',
      orderId: '#KHM-1003',
      amount: '₦32,100',
      status: 'Pending',
      releaseDate: '2025-08-12',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Escrow Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Escrow ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Release Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {escrowTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.orderId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === 'Released'
                        ? 'bg-green-100 text-green-800'
                        : transaction.status === 'Held'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.releaseDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.status === 'Held' && (
                    <button className="text-blue-800 hover:text-blue-600 mr-3">
                      Release Early
                    </button>
                  )}
                  <button className="text-gray-500 hover:text-gray-700">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EscrowFlow;
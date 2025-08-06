// app/Business/Dashboard/disputes/page.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import { FiAlertCircle, FiClock, FiCheck, FiMessageSquare } from 'react-icons/fi';

const DisputesPage = () => {
  const disputes = [
    {
      id: 'DP-1001',
      orderId: '#KHM-1001',
      customer: 'Adeola Johnson',
      opened: '2025-08-03',
      status: 'Open',
      type: 'Item Not Received',
      lastUpdated: '2 hours ago',
    },
    {
      id: 'DP-1002',
      orderId: '#KHM-1002',
      customer: 'Chinedu Okoro',
      opened: '2025-08-01',
      status: 'In Mediation',
      type: 'Wrong Item Delivered',
      lastUpdated: '1 day ago',
    },
    {
      id: 'DP-1003',
      orderId: '#KHM-1003',
      customer: 'Fatima Bello',
      opened: '2025-07-28',
      status: 'Resolved',
      type: 'Damaged Goods',
      lastUpdated: '5 days ago',
    },
  ];

  const statusBadge = (status: string) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'Open':
        return <span className={`${baseClasses} bg-red-100 text-red-800`}>{status}</span>;
      case 'In Mediation':
        return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>{status}</span>;
      case 'Resolved':
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>{status}</span>;
      default:
        return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>{status}</span>;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Dispute Resolution</h1>
        <p className="text-gray-600 mt-2">Manage and resolve customer disputes</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Active Disputes</h2>
          <div className="flex space-x-3">
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>All Status</option>
              <option>Open</option>
              <option>In Mediation</option>
              <option>Resolved</option>
            </select>
            <input
              type="text"
              placeholder="Search disputes..."
              className="border border-gray-300 rounded-md px-3 py-1 text-sm w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dispute ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Opened
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {disputes.map((dispute) => (
                <tr key={dispute.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">
                    {dispute.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dispute.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dispute.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dispute.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dispute.opened}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {statusBadge(dispute.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dispute.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href={`/Business/Dashboard/disputes/${dispute.id}`}>
                      <button className="text-blue-800 hover:text-blue-600 mr-3">
                        {dispute.status === 'Resolved' ? 'View' : 'Resolve'}
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{' '}
            <span className="font-medium">3</span> disputes
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputesPage;
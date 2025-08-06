// app/Business/Dashboard/logistics/page.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { FiTruck, FiPackage, FiCheckCircle, FiClock } from 'react-icons/fi';

type DeliveryStatus = 'In Transit' | 'Pending Pickup' | 'Delivered';

interface Delivery {
  id: string;
  orderId: string;
  customer: string;
  destination: string;
  status: DeliveryStatus;
  pod: boolean;
  estimatedDelivery: string;
}

const LogisticsPage = () => {
  const deliveries: Delivery[] = [
    {
      id: 'DL-1001',
      orderId: '#KHM-1001',
      customer: 'Adeola Johnson',
      destination: 'Lagos, Nigeria',
      status: 'In Transit',
      pod: true,
      estimatedDelivery: '2025-08-10',
    },
    {
      id: 'DL-1002',
      orderId: '#KHM-1002',
      customer: 'Chinedu Okoro',
      destination: 'Abuja, Nigeria',
      status: 'Pending Pickup',
      pod: false,
      estimatedDelivery: '2025-08-12',
    },
    {
      id: 'DL-1003',
      orderId: '#KHM-1003',
      customer: 'Fatima Bello',
      destination: 'Kano, Nigeria',
      status: 'Delivered',
      pod: true,
      estimatedDelivery: '2025-08-05',
    },
  ];

  const statusIcons: Record<DeliveryStatus, React.ReactElement> = {
    'In Transit': <FiTruck className="text-blue-500" />,
    'Pending Pickup': <FiPackage className="text-yellow-500" />,
    'Delivered': <FiCheckCircle className="text-green-500" />,
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Logistics Management</h1>
        <p className="text-gray-600 mt-2">Track and manage all your deliveries</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Active Deliveries</h2>
          <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Create New Shipment
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  POD
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">
                    {delivery.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {delivery.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {delivery.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {delivery.destination}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center">
                      {statusIcons[delivery.status]}
                      <span className="ml-2">{delivery.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {delivery.pod ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Enabled
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        Disabled
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href={`/Business/Dashboard/logistics/${delivery.id}`}>
                      <button className="text-blue-800 hover:text-blue-600 mr-3">
                        Track
                      </button>
                    </Link>
                    <button className="text-gray-500 hover:text-gray-700">
                      Label
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LogisticsPage;
// app/Business/Dashboard/logistics/components/ShippingLabel.tsx
'use client';
import React from 'react';

interface Delivery {
  id: string;
  orderId: string;
  customer: string;
  destination: string;
  address: string;
  courier: string;
  trackingNumber: string;
  items: { name: string; quantity: number }[];
}

interface ShippingLabelProps {
  delivery: Delivery;
}

const ShippingLabel: React.FC<ShippingLabelProps> = ({ delivery }) => {
  return (
    <div className="border-2 border-gray-300 p-4 rounded-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-bold text-blue-800">Shipping Label</h2>
          <p className="text-sm text-gray-500">#{delivery.id}</p>
        </div>
        <div className="bg-blue-800 text-white px-3 py-1 rounded-md text-sm font-medium">
          {delivery.courier}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">From</h3>
          <p className="font-medium">Your Business Name</p>
          <p className="text-sm">Your Business Address</p>
          <p className="text-sm">City, Country</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">To</h3>
          <p className="font-medium">{delivery.customer}</p>
          <p className="text-sm">{delivery.address}</p>
          <p className="text-sm">{delivery.destination}</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-500 mb-1">Tracking Number</h3>
        <p className="font-mono font-bold">{delivery.trackingNumber}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-500 mb-1">Contents</h3>
        <ul className="list-disc list-inside">
          {delivery.items.map((item, index) => (
            <li key={index} className="text-sm">
              {item.name} (Qty: {item.quantity})
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Order: {delivery.orderId}
        </div>
        <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
          Print Label
        </button>
      </div>
    </div>
  );
};

export default ShippingLabel;
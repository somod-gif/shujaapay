// app/Business/Dashboard/logistics/[id]/page.tsx
"use client";
import React from 'react';
import { FiTruck, FiMapPin, FiCalendar, FiDollarSign, FiCheck } from 'react-icons/fi';
// import PODVerifier from '../../components/PODVerifier';
// If PODVerifier exists elsewhere, update the path accordingly, e.g.:
import PODVerifier from '../components/PODVerifier';
// Or comment/remove if the component does not exist and is not needed
import ShippingLabel from '../components/ShippingLabel';

const DeliveryTrackingPage = ({ params }: { params: { id: string } }) => {
  // In a real app, you would fetch this data based on params.id
  const delivery = {
    id: params.id,
    orderId: '#KHM-1001',
    customer: 'Adeola Johnson',
    destination: 'Lagos, Nigeria',
    address: '12 Marina Road, Apapa, Lagos',
    status: 'In Transit',
    pod: true,
    estimatedDelivery: '2025-08-10',
    courier: 'KAIHMA Logistics',
    trackingNumber: 'KHMNG' + params.id.slice(3),
    amount: '₦25,400',
    items: [
      { name: 'Wireless Headphones', quantity: 1, price: '₦25,400' },
    ],
  };

  const statusSteps = [
    { name: 'Order Placed', completed: true, date: '2025-08-03' },
    { name: 'Processing', completed: true, date: '2025-08-04' },
    { name: 'Shipped', completed: true, date: '2025-08-05' },
    { name: 'In Transit', completed: true, current: true },
    { name: 'Out for Delivery', completed: false },
    { name: 'Delivered', completed: false },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Delivery Tracking</h1>
        <p className="text-gray-600 mt-2">Tracking ID: {delivery.id}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Delivery Details Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <FiMapPin className="text-blue-800 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium text-gray-700">Destination</h3>
                  <p className="text-gray-600">{delivery.destination}</p>
                  <p className="text-sm text-gray-500">{delivery.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiCalendar className="text-blue-800 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium text-gray-700">Estimated Delivery</h3>
                  <p className="text-gray-600">{delivery.estimatedDelivery}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiTruck className="text-blue-800 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium text-gray-700">Courier</h3>
                  <p className="text-gray-600">{delivery.courier}</p>
                  <p className="text-sm text-gray-500">Tracking #: {delivery.trackingNumber}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiDollarSign className="text-blue-800 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium text-gray-700">Order Value</h3>
                  <p className="text-gray-600">{delivery.amount}</p>
                  <p className="text-sm text-gray-500">{delivery.pod ? 'Pay on Delivery' : 'Prepaid'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Status</h2>
            <div className="space-y-4">
              {statusSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                    step.completed ? 'bg-green-100 text-green-800' : step.current ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.completed ? <FiCheck size={16} /> : index + 1}
                  </div>
                  <div className="border-l-2 border-gray-200 pt-1 pb-4 pl-4 -mt-1 -mb-4">
                    <h3 className={`text-sm font-medium ${
                      step.completed || step.current ? 'text-gray-800' : 'text-gray-500'
                    }`}>
                      {step.name}
                    </h3>
                    {step.date && (
                      <p className="text-xs text-gray-500 mt-1">{step.date}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pay on Delivery Verification */}
          {delivery.pod && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <PODVerifier deliveryId={delivery.id} />
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID</span>
                <span className="font-medium">{delivery.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Customer</span>
                <span className="font-medium">{delivery.customer}</span>
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              {delivery.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-medium">{item.price}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 my-2"></div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{delivery.amount}</span>
              </div>
            </div>
          </div>

          {/* Shipping Label */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <ShippingLabel delivery={delivery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTrackingPage;
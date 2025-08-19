// order/[id]/page.tsx
'use client'
import { useState } from 'react'
import { StatusBadge } from '../../components/StatusBadge'
import { OrderActions } from '../components/OrderActions'
import { DeliveryTracker } from './DeliveryTracker'
import { PODUpload } from './PODUpload'
import Link from 'next/link'

// Mock order data
const order = {
  id: 'ORD-001',
  customer: {
    name: 'Chinedu Okoro',
    email: 'chinedu@email.com',
    phone: '+234 801 234 5678',
    address: '123 Victoria Island, Lagos, Nigeria'
  },
  items: [
    { name: 'Wireless Headphones', price: '₦25,000', quantity: 1 },
    { name: 'Phone Case', price: '₦8,500', quantity: 2 },
  ],
  total: '₦45,800',
  status: 'paid' as const,
  orderDate: '2024-01-15',
  paymentMethod: 'Bank Transfer',
  trackingNumber: 'TRK-789456123'
}

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('details')

  const tabs = [
    { id: 'details', name: 'Order Details' },
    { id: 'delivery', name: 'Delivery Tracking' },
    { id: 'proof', name: 'Proof of Delivery' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <Link href="/Business/Dashboard/orders" className="text-blue-600 hover:text-blue-800 text-sm mb-2 inline-block">
            ← Back to Orders
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Order {order.id}</h1>
          <p className="text-gray-600">Placed on {order.orderDate}</p>
        </div>
        <StatusBadge status={order.status} />
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content based on active tab */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === 'details' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Order Items */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Items</h3>
              {order.items.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">{item.price} × {item.quantity}</p>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <p className="font-bold text-lg">Total: {order.total}</p>
              </div>
            </div>

            {/* Customer Info */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Information</h3>
              <div className="space-y-2">
                <p><strong>Name:</strong> {order.customer.name}</p>
                <p><strong>Email:</strong> {order.customer.email}</p>
                <p><strong>Phone:</strong> {order.customer.phone}</p>
                <p><strong>Address:</strong> {order.customer.address}</p>
                <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'delivery' && (
          <DeliveryTracker trackingNumber={order.trackingNumber} />
        )}

        {activeTab === 'proof' && (
          <PODUpload orderId={order.id} />
        )}
      </div>

      {/* Order Actions */}
      <OrderActions order={order} />
    </div>
  )
}
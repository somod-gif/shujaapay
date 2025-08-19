'use client'
import { useState } from 'react'
import { StatusBadge } from '../components/StatusBadge'
import { FilterBar } from '../components/FilterBar'
import Link from 'next/link'

// Mock data - replace with API call
const orders = [
  {
    id: 'ORD-001',
    customer: 'Chinedu Okoro',
    amount: '₦45,800',
    status: 'paid' as const,
    items: 3,
    date: '2024-01-15',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'ORD-002',
    customer: 'Amina Yusuf',
    amount: '₦32,500',
    status: 'shipped' as const,
    items: 2,
    date: '2024-01-14',
    location: 'Abuja, Nigeria'
  },
  {
    id: 'ORD-003',
    customer: 'Tunde Ojo',
    amount: '₦67,200',
    status: 'delivered' as const,
    items: 4,
    date: '2024-01-13',
    location: 'Ibadan, Nigeria'
  }
]

const tabs = [
  { name: 'Active', href: '#', current: true, count: 2 },
  { name: 'Completed', href: '#', current: false, count: 1 },
  { name: 'Cancelled', href: '#', current: false, count: 0 },
]

export default function OrdersPage() {
  const [selectedTab, setSelectedTab] = useState('Active')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setSelectedTab(tab.name)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                selectedTab === tab.name
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
              {tab.count > 0 && (
                <span className={`ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium ${
                  selectedTab === tab.name
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <FilterBar
        onSearch={(query) => console.log('Search:', query)}
        onStatusFilter={(status) => console.log('Status:', status)}
        onDateRange={(start, end) => console.log('Date range:', start, end)}
      />

      {/* Orders Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link
                    href={`/Business/Dashboard/orders/${order.id}`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { StatusBadge } from '../components/StatusBadge'
import { FilterBar } from '../components/FilterBar'
import Link from 'next/link'

// Define order status types
type OrderStatus = 'paid' | 'shipped' | 'delivered' | 'cancelled';
type PaymentStatus = 'paid' | 'pending' | 'failed';

interface Customer {
  name: string;
  email: string;
}

interface Order {
  id: string;
  orderNumber: string;
  customer: Customer;
  amount: string;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  items: number;
  date: string;
  location: string;
  currency: string;
}

// Mock data - replace with API call
const orders: Order[] = [
  {
    id: 'ORD-001',
    orderNumber: 'ORD-001',
    customer: {
      name: 'Chinedu Okoro',
      email: 'chinedu@email.com'
    },
    amount: '₦45,800',
    total: 45800,
    status: 'paid',
    paymentStatus: 'paid',
    items: 3,
    date: '2024-01-15',
    location: 'Lagos, Nigeria',
    currency: '₦'
  },
  {
    id: 'ORD-002',
    orderNumber: 'ORD-002',
    customer: {
      name: 'Amina Yusuf',
      email: 'amina@email.com'
    },
    amount: '₦32,500',
    total: 32500,
    status: 'shipped',
    paymentStatus: 'paid',
    items: 2,
    date: '2024-01-14',
    location: 'Abuja, Nigeria',
    currency: '₦'
  },
  {
    id: 'ORD-003',
    orderNumber: 'ORD-003',
    customer: {
      name: 'Tunde Ojo',
      email: 'tunde@email.com'
    },
    amount: '₦67,200',
    total: 67200,
    status: 'delivered',
    paymentStatus: 'paid',
    items: 4,
    date: '2024-01-13',
    location: 'Ibadan, Nigeria',
    currency: '₦'
  }
]

const tabs = [
  { name: 'Active', value: 'active', count: 2 },
  { name: 'Completed', value: 'completed', count: 1 },
  { name: 'Cancelled', value: 'cancelled', count: 0 },
]

export default function OrdersPage() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState('active')

  const handleRowClick = (orderId: string) => {
    router.push(`/Business/Dashboard/orders/${orderId}`)
  }

  const handleKeyPress = (event: React.KeyboardEvent, orderId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleRowClick(orderId)
    }
  }

  const filteredOrders = orders.filter(order => {
    switch (selectedTab) {
      case 'active':
        return order.status === 'paid' || order.status === 'shipped'
      case 'completed':
        return order.status === 'delivered'
      case 'cancelled':
        return order.status === 'cancelled'
      default:
        return true
    }
  })

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
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                selectedTab === tab.value
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
              {tab.count > 0 && (
                <span className={`ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium ${
                  selectedTab === tab.value
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
                Payment
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
            {filteredOrders.map((order) => (
              <tr 
                key={order.id} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(order.id)}
                onKeyDown={(e) => handleKeyPress(e, order.id)}
                tabIndex={0}
                aria-label={`View order details for ${order.orderNumber}`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.orderNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{order.customer.name}</div>
                  <div className="text-sm text-gray-500">{order.customer.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.paymentStatus === 'paid' 
                      ? 'bg-green-100 text-green-800' 
                      : order.paymentStatus === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td 
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                  onClick={(e) => e.stopPropagation()} // Prevent row click when clicking actions
                >
                  <Link
                    href={`/Business/Dashboard/orders/${order.id}`}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                  </Link>
                  {order.status === 'paid' && (
                    <button 
                      className="text-green-600 hover:text-green-900"
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log('Fulfill order:', order.id)
                      }}
                    >
                      Fulfill
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No orders found</div>
            <p className="text-gray-500 text-sm mt-2">
              {selectedTab === 'active' && 'No active orders at the moment'}
              {selectedTab === 'completed' && 'No completed orders yet'}
              {selectedTab === 'cancelled' && 'No cancelled orders'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
'use client'
import Link from 'next/link'
import { CheckCircleIcon, ClockIcon, XCircleIcon, TruckIcon } from '@heroicons/react/24/outline'
import type { Order } from '@/types/orders'

interface OrderTableProps {
  orders: Order[]
}

export function OrderTable({ orders }: OrderTableProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'fulfilled':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'processing':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />
      case 'cancelled':
        return <XCircleIcon className="h-5 w-5 text-red-500" />
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'failed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/Business/Dashboard/orders/${order.id}`} className="text-blue-600 hover:text-blue-900">
                  {order.orderNumber}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{order.customer.name}</div>
                <div className="text-sm text-gray-500">{order.customer.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(order.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className="ml-2 text-sm text-gray-900 capitalize">{order.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPaymentStatusColor(order.paymentStatus)}`}>
                  {order.paymentStatus}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.currency} {order.total.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link
                  href={`/Business/Dashboard/orders/${order.id}`}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  View
                </Link>
                <button className="text-blue-600 hover:text-blue-900">
                  <TruckIcon className="h-4 w-4 inline mr-1" />
                  Fulfill
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
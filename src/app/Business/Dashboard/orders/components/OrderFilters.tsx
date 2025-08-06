'use client'


import { FunnelIcon } from '@heroicons/react/24/outline'

export function OrderFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="fulfilled">Fulfilled</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label htmlFor="payment" className="block text-sm font-medium text-gray-700 mb-1">
              Payment
            </label>
            <select
              id="payment"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All Payments</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              id="location"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All Locations</option>
              <option value="Lagos">Lagos</option>
              <option value="Accra">Accra</option>
              <option value="Nairobi">Nairobi</option>
            </select>
          </div>
        </div>

        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <FunnelIcon className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>
    </div>
  )
}
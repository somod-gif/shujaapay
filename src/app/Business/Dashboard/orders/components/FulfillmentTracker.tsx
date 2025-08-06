'use client'

import { useState } from 'react'
import { CheckCircleIcon, TruckIcon, XCircleIcon } from '@heroicons/react/24/outline'

interface FulfillmentTrackerProps {
  status: string
  orderId: string
}

export function FulfillmentTracker({ status, orderId }: FulfillmentTrackerProps) {
  const [currentStatus, setCurrentStatus] = useState(status)
  const [trackingNumber, setTrackingNumber] = useState('')

  const fulfillOrder = () => {
    // API call to fulfill order
    setCurrentStatus('fulfilled')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Fulfillment</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Status</h3>
          <div className="flex items-center mt-1">
            {currentStatus === 'fulfilled' ? (
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            ) : currentStatus === 'unfulfilled' ? (
              <XCircleIcon className="h-5 w-5 text-red-500" />
            ) : (
              <TruckIcon className="h-5 w-5 text-yellow-500" />
            )}
            <span className="ml-2 text-sm text-gray-900 capitalize">
              {currentStatus.replace('_', ' ')}
            </span>
          </div>
        </div>

        {currentStatus !== 'fulfilled' && (
          <>
            <div>
              <label htmlFor="tracking" className="block text-sm font-medium text-gray-700">
                Tracking Number
              </label>
              <input
                type="text"
                id="tracking"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={fulfillOrder}
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-700"
            >
              <TruckIcon className="h-4 w-4 mr-2" />
              Mark as Fulfilled
            </button>
          </>
        )}
      </div>
    </div>
  )
}
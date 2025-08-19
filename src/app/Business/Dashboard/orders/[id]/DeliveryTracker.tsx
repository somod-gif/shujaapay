'use client'
import { useState } from 'react'

interface DeliveryTrackerProps {
  trackingNumber: string
}

const deliverySteps = [
  { status: 'ordered', label: 'Order Placed', description: 'Order confirmed and payment received', time: '2024-01-15 10:30' },
  { status: 'processed', label: 'Processing', description: 'Order is being prepared for shipment', time: '2024-01-15 14:15' },
  { status: 'shipped', label: 'Shipped', description: 'Package has been handed to courier', time: '2024-01-16 09:00' },
  { status: 'out_for_delivery', label: 'Out for Delivery', description: 'Package is with delivery driver', time: '2024-01-17 08:45' },
  { status: 'delivered', label: 'Delivered', description: 'Package delivered to customer', time: '2024-01-17 14:20' },
]

export function DeliveryTracker({ trackingNumber }: DeliveryTrackerProps) {
  const [currentStep] = useState(3) // Mock current step

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Delivery Tracking</h3>
        <span className="text-sm text-gray-600">Tracking #: {trackingNumber}</span>
      </div>

      <div className="relative">
        {deliverySteps.map((step, index) => (
          <div key={step.status} className="flex items-start space-x-4 pb-6">
            {/* Timeline connector */}
            {index < deliverySteps.length - 1 && (
              <div className={`absolute left-4 top-8 w-0.5 h-12 ${
                index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`} />
            )}
            
            {/* Status indicator */}
            <div className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
            }`}>
              {index < currentStep ? (
                <span className="text-white text-sm">✓</span>
              ) : (
                <span className="text-white text-sm">{index + 1}</span>
              )}
            </div>

            {/* Step content */}
            <div className="flex-1">
              <p className={`font-medium ${
                index <= currentStep ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {step.label}
              </p>
              <p className="text-sm text-gray-600">{step.description}</p>
              <p className="text-xs text-gray-500 mt-1">{step.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Map placeholder */}
      <div className="bg-gray-100 rounded-lg p-4 text-center h-48 flex items-center justify-center">
        <p className="text-gray-600">Real-time delivery map integration would appear here</p>
      </div>
    </div>
  )
}
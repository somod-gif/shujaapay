'use client'

import { OrderFilters } from './components/OrderFilters'
import { OrderTable } from './components/OrderTable'
import type { Order } from '@/types/orders'

export default function OrdersPage() {
  // Sample order data
  const orders: Order[] = [
    {
      id: 'order_123',
      orderNumber: 'KA-5421',
      customer: {
        name: 'Adeola Johnson',
        email: 'adeola@example.com',
        phone: '+2348012345678'
      },
      date: '2023-06-15',
      status: 'processing',
      paymentStatus: 'paid',
      fulfillmentStatus: 'partially_fulfilled',
      total: 24850,
      currency: 'NGN',
      location: 'Lagos',
      items: [
        {
          id: 'item_1',
          productId: 'prod_123',
          name: 'African Print Dress',
          quantity: 2,
          price: 8500
        }
      ]
    },
    {
      id: 'order_456',
      orderNumber: 'KA-5422',
      customer: {
        name: 'Kwame Asante',
        email: 'kwame@example.com',
        phone: '+233201234567'
      },
      date: '2023-06-14',
      status: 'pending',
      paymentStatus: 'pending',
      fulfillmentStatus: 'unfulfilled',
      total: 3200,
      currency: 'GHS',
      location: 'Accra',
      items: [
        {
          id: 'item_2',
          productId: 'prod_456',
          name: 'Handcrafted Beads',
          quantity: 1,
          price: 3200
        }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
      </div>

      <OrderFilters />
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <OrderTable orders={orders} />
      </div>
    </div>
  )
}